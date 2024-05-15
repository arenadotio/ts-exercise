import Koa, { DefaultState, Next } from 'koa';
import cors from '@koa/cors';
import json from 'koa-json';
import { getExceptionMiddleware } from './middleware/exception';
import { getLoggerMiddleware } from './middleware/logger';
import { router } from './routes/routes';
import { ExtendedContext } from './models/extended-ctx.model';
import koaBody from 'koa-body';

const app = async ({ port }: { port?: string | number }) => {
  const _app = new Koa<DefaultState, ExtendedContext>();
  const loggerMiddleware = getLoggerMiddleware();
  const exceptionMiddleware = getExceptionMiddleware();

  _app.use(loggerMiddleware);
  _app.use(exceptionMiddleware);
  _app.use(json());
  _app.use(cors());
  _app.use(koaBody({ multipart: true, json: true }));

  _app.use(async (ctx: ExtendedContext, next: Next) => {
    ctx.state = {};
    await next();
    return ctx;
  });

  _app.use(router().routes());

  _app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });

  return _app;
};

export default app;
