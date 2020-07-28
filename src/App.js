import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewsApp from "./NewsApp";

function App() {
  return (
    <Provider store={store}>
      <NewsApp></NewsApp>
    </Provider>
  );
}

export default App;
