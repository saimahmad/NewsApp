import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewsApp from './NewsApp'


//9f0b2b206db44fbd9fb27ca34e33c828  Api Key
//b73488c2a8dd4be89096d63dcb967115 Api Key
//0244367120974a4e93abc55f1b0d6906 Api Key

function App() {
  return (
    <Provider store={store}>
      <NewsApp></NewsApp>
    </Provider>
  );
}

export default App;
