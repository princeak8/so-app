import {
	LOGIN_USER,
	LOGOUT_USER,
	
	SET_ERROR,
	SET_LINE_DETAILS,
	TOGGLE_MODAL,
	SET_POWER_STATIONS,
	ADD_POWER_STATION,
	UPDATE_POWER_STATION,
	SET_STATIONS,
	UPDATE_STATION,
	TOGGLE_CONNECTED
} from './mutation-types';

const TOKEN = 'token';
const USER = 'user';
var n = 1;

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
		// console.log('setting pStations: ', data);
		state.pStations = [...data];
	},

	[ADD_POWER_STATION](state, data) {
		//console.log(data);
		var newData = {...data};
		newData.lines = [...data.lines];
		state.pStations = [...state.pStations, {...newData}];
		//console.log(data);
	},

	[SET_STATIONS](state, data) {
		state.stations = data;
	},

	[UPDATE_POWER_STATION](state, data) {
		// console.log('update power', state.pStations);
		//console.log(data);
		const streamedPowerStation = data
		//if(streamedPowerStation.id=='omotosho2') console.log('stream'+n+'a',streamedPowerStation);
		const getPowerStation = state.pStations.find(x => x.id === data.id)
		//if(getPowerStation.id=='omotosho2') console.log(getPowerStation);
		if(getPowerStation) {
			//if(getPowerStation.id=='odukpaniGs') console.log('stream'+n+'b', streamedPowerStation.lines);
			const powerStationUnits = (getPowerStation.units) ? getPowerStation.units : getPowerStation.lines;
			const streamedStationUnits = (streamedPowerStation.units) ? streamedPowerStation.units : streamedPowerStation.lines
			
			const updatedPowerStationUnits = powerStationUnits.filter((item) => {
				const foundItem = streamedStationUnits.find(x => x.id === item.id)
				if(foundItem) {
					if(item.powerData) item.powerData = (foundItem.gd) ? foundItem.gd : (foundItem.pd) ? foundItem.pd : foundItem.td;
					if(item.gd) item.gd = (foundItem.gd) ? foundItem.gd : foundItem.pd;
					if(item.td) item.td = (foundItem.td) ? foundItem.td : '';
				}
				return item
			})
			// state.pStations = state.pStations.filter(x => {
			// 	if(x.name === getPowerStation.name) {
			// 		if(x.units) x.units = updatedPowerStationUnits;
            //   		//if(x.lines) x.lines = updatedPowerStationUnits;
			// 	}
			// 	return x
			// })
		}
		//if(streamedPowerStation.id=='odukpaniGs') n++;
	},

	[TOGGLE_CONNECTED](state, status) {
		state.connected = status;
	}
};
