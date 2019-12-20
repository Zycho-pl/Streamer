import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM: // new 2015 syntax
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS: // zamienia tablicę na object
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_STREAM: // tworzy new object bez item przekazanej jako action
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
