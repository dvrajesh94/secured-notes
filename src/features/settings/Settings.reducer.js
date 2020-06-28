/**
 * Defines reducers related to settings.
 * this reducer will be combined in the store/RootReducer.js
 */

import {IndexPath} from '@ui-kitten/components';
import {themeMap} from '../../constants/ThemeConstants';
import * as types from '../../constants/ActionTypes';

const initstate = {
  currentTheme: {
    index: new IndexPath(0),
    value: themeMap[0],
  },
};

export default function(state = initstate, {type, payload}) {
  switch (type) {
    case types.THEME_SELECTED:
      return {...state, currentTheme: payload};
    default:
      return state;
  }
}
