import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actionTypes";

export const signIn = (userDetails) => {
  return {
    type: SIGN_IN,
    payload: {
      userDetails: userDetails,
    },
  };
};

export const signOut = (userDetails) => {
  return {
    type: SIGN_OUT,
    payload: {
      userDetails: userDetails,
    },
  };
};

export const signUp = (userDetails) => {
  return {
    type: SIGN_UP,
    payload: {
      userDetails: userDetails,
    },
  };
};
