import {
	LOGIN_USER,
	LOGOUT_USER,
	
	SET_ERROR,
	SET_LINE_DETAILS,
	TOGGLE_MODAL,
	SET_POWER_STATIONS,
	UPDATE_POWER_STATION
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
	},

	[SET_POWER_STATIONS](state, data) {
		state.pStations = data;
	},

	[UPDATE_POWER_STATION](state, data) {
		//console.log('update power', state.pStations);
		const streamedPowerStation = data
		const getPowerStation = state.pStations.find(x => x.id === data.id)
		if(getPowerStation) {
			const powerStationUnits = getPowerStation.units
			const streamedStationUnits = streamedPowerStation.units
			
			const updatedPowerStationUnits = powerStationUnits.filter((item) => {
				const foundItem = streamedStationUnits.find(x => x.id === item.id)
				if(foundItem) {
					item.powerData = foundItem.gd;
					item.pd = foundItem.gd
				}
				return item
			})
			state.pStations = state.pStations.filter(x => {
				if(x.name === getPowerStation.name) {
					x.units = updatedPowerStationUnits
				}
				return x
			})
		}
	}
};
