import Router from 'koa-router';
import Status from '../controllers/status';
import { DefaultState } from 'koa';
import { ExtendedContext } from '../models/extended-ctx.model';
import ThemesController from '../controllers/themes';

export const router = () => {
  const router = new Router<DefaultState, ExtendedContext>();
  const statusController = Status();
  router.get('/status', statusController.status);

  const themesController = ThemesController();
  router.get('/theme', themesController.getAllThemes);
  router.get('/theme/:clientLookupName', themesController.getTheme);
  router.post('/theme', themesController.createTheme);
  router.patch('/theme/:clientLookupName', themesController.editTheme);
  router.del('/theme/:clientLookupName', themesController.deleteTheme);

  return router;
};
