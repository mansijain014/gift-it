import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../actionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  userDetails: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        userDetails: action.payload.userDetails,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        userDetails: false,
      };
    default:
      return state;
  }
};

export default reducer;
