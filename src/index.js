import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';
import LocalStorageService from "./services/LocalStorageService";


/**** Start Import CSS & JS ***********/

import 'react-toastify/dist/ReactToastify.css';
/**** End Import CSS ***********/

// Import reducer
import { Provider } from "react-redux";

// Import Store
import store from "./redux/backend/Store";

// Import axios.js so that it can inject token in every request
require ('./services/axios');

toast.configure();

// Import Local storage to get access tokens
const localStorageService = LocalStorageService.getService();
ReactDOM.render(
    <Provider store={store}>
        <HttpsRedirect>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HttpsRedirect>
        <ToastContainer />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
