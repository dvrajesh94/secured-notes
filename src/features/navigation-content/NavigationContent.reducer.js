/**
 * Defines reducers related to navigation content.
 * this reducer will be combined in the store/RootReducer.js
 */

import * as types from '../../constants/ActionTypes';

const initstate = {
  currentScreen: 'default',
};

export default function(state = initstate, {type, payload}) {
  switch (type) {
    case types.NAVIGATION_CONTENT_SELECTED:
      return {...state, currentScreen: payload};
    default:
      return state;
  }
}
