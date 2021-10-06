
import {
    GET_PAYMENTOPTIONS, SET_LINE_DETAILS, TOGGLE_MODAL,
} from '../mutation-types';

// eslint-disable-next-line import/prefer-default-export
export const setLineDetails = ({ commit }, payload) => new Promise((resolve, reject) => {
    commit(SET_LINE_DETAILS, payload);      
});
export const toggleModal = ({ commit }, value) => new Promise((resolve, reject) => {
    commit(TOGGLE_MODAL, value);      
});




