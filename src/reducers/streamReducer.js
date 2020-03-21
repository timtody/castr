import _ from "lodash";
import {
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  GET_STREAM,
  GET_STREAMS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
