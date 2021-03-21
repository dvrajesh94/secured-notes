import * as eva from '@eva-design/eva';
import material_dark from './material_dark';
import material_light from './material_light';

export const getTheme = themeObj => {
  switch (themeObj.type) {
    case 'material_light':
      return material_light;
    case 'material_dark':
      return material_dark;
    case 'eva_light':
      return eva.light;
    case 'eva_dark':
      return eva.dark;
    default:
      return material_light;
  }
};
