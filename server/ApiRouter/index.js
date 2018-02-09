import { Router } from 'express';
import routes from './route-config';

const router = Router();

// Setting the routes
for(const route of routes) {
  const isMiddleware = typeof route === 'function';

  if(!isMiddleware) {
    // set Route
    router[route.method](route.path, async function routerHandler(req, res, next) {
      try {
        // Request Data Validator
        route.validate && await route.validate(req, res, next);
        // Router Processer
        route.handler && await route.handler(req, res, next);

      } catch(message) {
        // Exception Handling
        next(message);
      }
    });
  } else {
    // set Middleware
    router.use(route);
  }
}

export default router;
