import BasicRouter from '../BasicRouter';
import { UserController } from '../../Controllers';

class UserRouter extends BasicRouter {

  signUp = {
    required: {
      body: [
        'password'
      ]
    },

    validate: (req, res) => {
      const { username, email, mobile } = req.body;

      if(!username && !email && !mobile) {
        throw this.messages.SIGNUP_INVALID;
      }
    },
    handler: async (req, res) => {
      await UserController.signIn();
    }
  };

  signIn = {
    // required: {
    //   body: [
    //     'password'
    //   ],
    //   query: [
    //     'isLogin'
    //   ]
    // },

    validate: (req, res) => {
    },

    handler: async (req, res) => {
      console.log(await UserController.signIn());
      res.json({ handler: 'handler' });
    }
  };
}

export default new UserRouter();
