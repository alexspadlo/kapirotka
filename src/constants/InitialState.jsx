import { fromJS } from 'immutable';

import * as userState from './ContentState';

const state = {
	gitcontent: {
		entries: null,
		errors: null,
		status: userState.CONTENT_RETRIEVED,
	},
};

export default fromJS(state);
