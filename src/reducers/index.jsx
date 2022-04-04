import { combineReducers } from 'redux-immutable';
import gitContentReducer from './gitcontent';

const rootReducer = combineReducers({
	gitcontent: gitContentReducer,
});

export default rootReducer;
