import {
  SET_AUTH,
  SET_WALLET,
  SET_EMAIL,
  SET_DISCORD,
  SET_TWITTER,
} from "../type";

export const setAuth = (data) => async (dispatch) => {
  dispatch({ type: SET_AUTH, payload: data });
};

export const setWallet = (data) => async (dispatch) => {
  dispatch({ type: SET_WALLET, payload: data });
};

export const setEmail = (data) => async (dispatch) => {
  dispatch({ type: SET_EMAIL, payload: data });
};

export const setDiscord = (data) => async (dispatch) => {
  dispatch({ type: SET_DISCORD, payload: data });
};

export const setTwitter = (data) => async (dispatch) => {
  dispatch({ type: SET_TWITTER, payload: data });
};
