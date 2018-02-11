import '../config';
import Application from './Application';

class Server extends Application {
  constructor() {
    super();

    this.useLogger();
    this.useSession();
    this.useViewEngine();
    this.useStaticResource();
    this.useRouter();
    this.useExtends();
    this.connectDB();
    this.run();
  }
}

export default new Server();