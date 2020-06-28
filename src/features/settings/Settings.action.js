/**
 * Defines actions related to navigation content.
 */

import * as types from '../../constants/ActionTypes';

export const selectedTheme = payload => ({
  type: types.THEME_SELECTED,
  payload,
});
