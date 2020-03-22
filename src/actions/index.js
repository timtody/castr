import history from "../history";

import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  GET_STREAM,
  GET_STREAMS
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  console.log("creating stream");
  const { userId } = getState().auth;
  const response = await streams.post("streams", {
    ...formValues,
    userId
  });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete("streams/" + id);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.patch("streams/" + id, {
    ...formValues
  });
  dispatch({ type: UPDATE_STREAM, payload: response.data });
  history.push("/");
};

export const getStream = id => async dispatch => {
  const response = await streams.get("streams/" + id);
  dispatch({ type: GET_STREAM, payload: response.data });
};

export const getStreams = () => async dispatch => {
  const response = await streams.get("streams");
  dispatch({ type: GET_STREAMS, payload: response.data });
};
