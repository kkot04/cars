import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/cars">
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
