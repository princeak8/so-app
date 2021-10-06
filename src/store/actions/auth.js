import {
  CREATE_USER, LOGIN_USER, LOGOUT_USER, GET_CONTACT
} from '../mutation-types';
import { RESET_CURRENCY } from '../modules/currency/mutations-type';
import http from '@/http';

export const create_user = ({ commit }, formData) => new Promise((resolve, reject) => {
  http
    .post('auth/signup', formData)
    .then((response) => {
      commit(CREATE_USER, response.data);
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const login_user = ({ commit }, formData) => new Promise((resolve, reject) => {
  http
    .post('auth/login', formData)
    .then((response) => {
      commit(LOGIN_USER, response);
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const logout_user = ({ commit }) => {
  commit(`currency/${RESET_CURRENCY}`, null, { root: true });
  commit(LOGOUT_USER);
};

export const get_contact = ({ commit, state }) => new Promise((resolve, reject) => {
  http.get(`contacts?user=${state.user._id}`)
    .then((response) => {
      commit(GET_CONTACT, response);
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});
