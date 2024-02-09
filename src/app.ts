import { envs } from './config';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
  main();
})();

async function main() {
  // TODO: await database

  // TODO: Start the server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  }).start();
}
