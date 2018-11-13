import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import MainPage from "./components/main_page";

const initialState = {
  input: "",
  profiles: [],
  winners: [],
  removedItems: [],
  loading: false,
  picking: false,
  error: false,
  settings: {
    winnersNum: 1,
    lang: "ru"
  }
};

const myStore = composeWithDevTools(applyMiddleware(thunk))(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={myStore(reducers, initialState)}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
