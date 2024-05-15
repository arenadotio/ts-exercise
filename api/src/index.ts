import app from './app';

const port = process.env.PORT ? process.env.PORT : 3001;

(async () => {
  await app({ port });
})();
