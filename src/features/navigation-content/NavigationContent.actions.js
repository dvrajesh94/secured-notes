/**
 * Defines actions related to navigation content.
 */

import * as types from '../../constants/ActionTypes';

export const selectNavigationContent = payload => ({
  type: types.NAVIGATION_CONTENT_SELECTED,
  payload,
});
