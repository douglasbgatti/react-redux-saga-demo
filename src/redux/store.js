import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas/image";

import { reducer } from "./image/reducer";

export const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );

  sagaMiddleWare.run(rootSaga);

  return store;
};
