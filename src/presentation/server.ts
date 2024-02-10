import express, { Router } from 'express';

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  public readonly port: number;
  public readonly routes: Router;

  constructor(options: Options) {
    const { port = 3100, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
