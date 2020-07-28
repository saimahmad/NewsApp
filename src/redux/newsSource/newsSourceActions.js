import axios from "axios";
import { apiKey } from "../../constants";

import {
  FETCH_SOURCES_REQUEST,
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_FAILURE,
} from "./newsSourceTypes";

export const fetchSourcesRequest = () => {
  return {
    type: FETCH_SOURCES_REQUEST,
  };
};

export const fetchSourcesSuccess = (sources) => {
  return {
    type: FETCH_SOURCES_SUCCESS,
    payload: sources,
  };
};

export const fetchSourcesFailure = (error) => {
  return {
    type: FETCH_SOURCES_FAILURE,
    payload: error,
  };
};

export const fetchSources = () => {
  return (dispatch) => {
    dispatch(fetchSourcesRequest());
    axios
      .get("https://newsapi.org/v2/sources?language=en&apiKey=" + apiKey)
      .then((response) => {
        const sources = response.data.sources;
        dispatch(fetchSourcesSuccess(sources));
      })
      .catch((error) => {
        dispatch(fetchSourcesFailure(error.message));
      });
  };
};
