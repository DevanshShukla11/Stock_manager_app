import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore } from 'redux';
import mainReducer from './Redux/Reducers/mainReducer';


const store = createStore(mainReducer,composeWithDevTools())

export default store;
