import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./containers/App/App";
import { store } from "./redux/createStore";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
