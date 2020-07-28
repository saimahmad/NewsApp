import {
  FETCH_SOURCES_REQUEST,
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_FAILURE,
} from "./newsSourceTypes";

const initialState = {
  loading: false,
  sources: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOURCES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SOURCES_SUCCESS:
      return {
        loading: false,
        sources: action.payload,
        error: "",
      };
    case FETCH_SOURCES_FAILURE:
      return {
        loading: false,
        sources: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
