import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
