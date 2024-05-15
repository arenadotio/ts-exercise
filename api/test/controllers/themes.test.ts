import { describe, expect, it, beforeEach } from '@jest/globals';
import ThemesController from '../../src/controllers/themes';
import { ExtendedContext } from '../../src/models/extended-ctx.model';
import { ThemeInput } from '../../src/models/theme-input.model';

describe('ThemesController', () => {
  let mockContext: ExtendedContext;

  beforeEach(() => {
    mockContext = {} as ExtendedContext;
  });

  const hardCodedData: ThemeInput = {
    client: 't',
    clientDisplayName: 'test',
    backgroundColor: 'white',
    customText: 'hi',
    primaryColor: 'red',
    contrastTextColor: 'white',
    textColor: 'black',
  };

  describe('get', () => {
    it('should return a theme and status of 200', async () => {
      const controllerUT = ThemesController();

      await controllerUT.getTheme(mockContext);

      expect(mockContext.body).toEqual(hardCodedData);
      expect(mockContext.status).toEqual(200);
    });
  });

  describe('get', () => {
    it('should return all themes and status of 200', async () => {
      const controllerUT = ThemesController();

      await controllerUT.getAllThemes(mockContext);

      expect(mockContext.body).toEqual([hardCodedData]);
      expect(mockContext.status).toEqual(200);
    });
  });
});
