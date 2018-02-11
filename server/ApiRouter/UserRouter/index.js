class UserRouter {

  signUp = {
    validate(req, res, next) {

    },
    handler(req, res, next) {

    }
  };

  signIn = {
    validate(req, res) {
      console.log('validate');
    },
    handler(req, res) {
      console.log('handler');
      res.json({ handler: 'handler' });
    }
  };
}

export default new UserRouter();
