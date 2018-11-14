import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import MainPage from "./components/main_page";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./actions/sagas";

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

const sagaMiddleware = createSagaMiddleware();

const store = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)(
  reducers,
  initialState
);
// const myStore = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
