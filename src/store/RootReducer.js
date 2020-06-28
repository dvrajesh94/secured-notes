/**
 * Import the reducers from components and pass to combineReducers
 */

import {combineReducers} from 'redux';
import navigationContent from '../features/navigation-content/NavigationContent.reducer';
import settings from '../features/settings/Settings.reducer';

const rootReducer = combineReducers({
  navigationContent,
  settings,
});

export default rootReducer;
