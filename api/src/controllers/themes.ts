import { ThemeInput } from '../models/theme-input.model';
import { ExtendedContext } from '../models/extended-ctx.model';

const ThemesController = () => {
  const getAllThemes = async (ctx: ExtendedContext): Promise<void> => {
    const data: ThemeInput[] = [
      {
        client: 't',
        clientDisplayName: 'test',
        backgroundColor: 'white',
        customText: 'hi',
        primaryColor: 'red',
        contrastTextColor: 'white',
        textColor: 'black',
      },
    ];
    ctx.body = data;
    ctx.status = 200;
  };

  const getTheme = async (ctx: ExtendedContext): Promise<void> => {
    const data: ThemeInput = {
      client: 't',
      clientDisplayName: 'test',
      backgroundColor: 'white',
      customText: 'hi',
      primaryColor: 'red',
      contrastTextColor: 'white',
      textColor: 'black',
    };
    ctx.body = data;
    ctx.status = 200;
  };

  const editTheme = async (ctx: ExtendedContext): Promise<void> => {
    throw new Error('not implemented');
  };

  const createTheme = async (ctx: ExtendedContext): Promise<void> => {
    throw new Error('not implemented');
  };

  const deleteTheme = async (ctx: ExtendedContext): Promise<void> => {
    throw new Error('not implemented');
  };
  return {
    getAllThemes,
    getTheme,
    deleteTheme,
    createTheme,
    editTheme,
  };
};

export default ThemesController;
