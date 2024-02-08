import { Server } from './presentation/server';
(() => {
  main();
})();

async function main() {
  // TODO: await database

  // TODO: Start the server
  new Server({ port: 4200 }).start();
}
