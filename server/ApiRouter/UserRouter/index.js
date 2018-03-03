import BasicRouter from '../BasicRouter';
import { UserController, EntryController } from '../../Controllers';

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
      const { messages } = this;
      const user = await UserController.signUp(req.body);

      res.json(messages.REQUEST_SUCCESS(user));
    }
  };

  signIn = {
    required: {
      body: [
        'password'
      ]
    },

    validate: (req, res) => {
    },

    handler: async (req, res) => {
      const { messages } = this;

      const user = await UserController.signIn(req.body);
      await EntryController.log(req.ip, user);

      res.json(messages.REQUEST_SUCCESS(user));
    }
  };
}

export default new UserRouter();
