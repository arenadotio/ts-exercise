import { Next } from 'koa';
import { ExtendedContext } from '../models/extended-ctx.model';

export type Auth0Error = {
  originalError?: Error;
  name?: string;
  message?: string;
  stack?: string;
};

const handleErrorMiddleware = async (ctx: ExtendedContext, next: Next): Promise<void> => {
  try {
    await next();
  } catch (err: unknown) {
    // handle auth errors separately to avoid logging them as errors
    if (err instanceof Error && (err as Auth0Error).name === 'UnauthorizedError') {
      ctx.body = 'Unauthorized';
      ctx.status = 401;
      const { originalError } = err as Auth0Error;
      ctx.log.error(
        { originalError },
        `Unauthorized Request : ${(err as Auth0Error).originalError?.message || err.message}`,
      );
    } else {
      // other uncaught errors
      const message = 'Internal Server Error';
      ctx.status = 500;
      ctx.body = message;
    }
    ctx.app.emit('error', err, ctx);
  }
};

export const getExceptionMiddleware = () => handleErrorMiddleware;
