import '../config';
import Application from './Application';

class Server extends Application {
  constructor() {
    super();

    this.useLogger();
    this.useSession();
    this.useViewEngine();
    this.useExtends();
    this.connectDB();
    this.run();
  }
}

export default new Server();