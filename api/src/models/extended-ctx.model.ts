import { DefaultState } from 'koa';
import { IRouterContext } from 'koa-router';
import pino from 'pino';

export interface ExtendedContext extends IRouterContext {
  log: pino.Logger & {
    info: (message: string) => void;
    debug: (message: string) => void;
    error: (message: string) => void;
  };
  state: ExtendedState;
}

interface ExtendedState extends DefaultState {}
