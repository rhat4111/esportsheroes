import {
  SET_AUTH,
  SET_WALLET,
  SET_EMAIL,
  SET_DISCORD,
  SET_TWITTER,
} from "../type";

const initialState = {
  auth: false,
  wallet: null,
  email: null,
  discord: null,
  twitter: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: action.payload };
    case SET_WALLET:
      return { ...state, wallet: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_DISCORD:
      return { ...state, discord: action.payload };
    case SET_TWITTER:
      return { ...state, twitter: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
