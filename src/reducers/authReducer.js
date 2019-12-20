import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  //wielkie litery -> nie modyfikować tego nigdy!!!
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: //srting from "types"
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
