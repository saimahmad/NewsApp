import { combineReducers } from "redux";
import newsSourceReducer from "./newsSource/newsSourceReducer";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
  newsSource: newsSourceReducer,
  page: pageReducer,
});

export default rootReducer;
