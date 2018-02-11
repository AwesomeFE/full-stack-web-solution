import UserRouter from './UserRouter';
import * as middlewares from './Middlewares';

export default [
  middlewares.ensureSignIn,
  { path: '/user/signin', method: 'get', ...UserRouter.signIn },
];