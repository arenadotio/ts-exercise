import { ExtendedContext } from '../models/extended-ctx.model';

const StatusController = () => {
  const status = (ctx: ExtendedContext): void => {
    ctx.body = { status: 200, message: 'OK' };
    return;
  };

  return {
    status,
  };
};

export default StatusController;
