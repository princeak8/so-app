import {
	LOGIN_USER,
	LOGOUT_USER,
	
	SET_ERROR,
	SET_LINE_DETAILS,
	TOGGLE_MODAL
} from './mutation-types';

const TOKEN = 'token';
const USER = 'user';

export default {
	
	[LOGOUT_USER](state) {
		state.user = {};
		state.token = '';
		localStorage.clear();
	},
	[SET_LINE_DETAILS](state, response) {
		state.lineDetails = response;
	},
	[TOGGLE_MODAL](state, value) {
		state.showOverlay = value;
	},
	saveRouteLink(state, data) {
		state.routeLink = data;
	},
	[SET_ERROR](state, data) {
		state.error = data;
	}
};
