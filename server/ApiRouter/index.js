import { Router } from 'express';
import routes from './route-config';

const router = Router();

for(const route of routes) {
  const isMiddleware = typeof route === 'function';

  if(!isMiddleware) {
    router[route.method](route.path, routeHandler);
  } else {
    router.use(route);
  }

  /**
   * Define Route Handler
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async function routeHandler(req, res, next) {
    try {
      route.validate && await route.validate(req, res, next);
      route.handler && await route.handler(req, res, next);
    } catch(message) {
      next(message);
    }
  }
}

export default router;
