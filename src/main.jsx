import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Auth0Provider  domain="dev-e3mf01wwgf3o7gt7.us.auth0.com"
   clientId="eRQb3ZV6CBbY6zVBFvkEh6slta3PKiA4"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}>

   <Provider store={store}>
        <App />
    </Provider>
    </Auth0Provider>

);

