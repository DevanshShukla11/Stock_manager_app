import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';



//Here we are collectin data of reducer in store to use it further 


ReactDOM.render(
  <>
   <Provider store={store}>
   <BrowserRouter>
   <App />
  </BrowserRouter>
  </Provider>
  </>,
  document.getElementById('root')
);



