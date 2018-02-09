import UserRouter from './UserRouter';
import middlewares from './Middlewares';

export default [
  middlewares.ensureSignIn,
  { path: '/user/signin', method: 'post', ...UserRouter.signIn },
];