/**
 * Import the reducers from components and pass to combineReducers
 */

import {combineReducers} from 'redux';
import navigationContent from '../features/navigation-content/NavigationContent.reducer';

const rootReducer = combineReducers({
  navigationContent,
});

export default rootReducer;
