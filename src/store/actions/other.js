
import {
    GET_PAYMENTOPTIONS, SET_LINE_DETAILS, TOGGLE_MODAL, SET_POWER_STATIONS, ADD_POWER_STATION, UPDATE_POWER_STATION, TOGGLE_CONNECTED
} from '../mutation-types';

// eslint-disable-next-line import/prefer-default-export
export const setLineDetails = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(SET_LINE_DETAILS, payload);      
});
export const toggleModal = ({ commit }, value) => new Promise((resolve, reject) => {
    commit(TOGGLE_MODAL, value);      
});

export const setPowerStations = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(SET_POWER_STATIONS, payload);      
});

export const addPowerStation = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(ADD_POWER_STATION, payload);      
});

export const updatePowerStation = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(UPDATE_POWER_STATION, payload);      
});

export const toggleConnected = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(TOGGLE_CONNECTED, payload);      
});




