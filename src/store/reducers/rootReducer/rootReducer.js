import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import asyncReducer from '../asyncReducers/asyncReducers'

import dialogReducer from '../dialogReducer/dialogReducer'
import globalReducer from "../globalReducer/globalReducer";
import dashboardReducer from "../dashboardReducer/dashboardReducer";
import contactsReducer from "../contactsReducer/contactsReducer";


const rootReducer = combineReducers({
  // ASYNC
  loading: asyncReducer,

  // FIREBASE/FIRESTORE
  firebase: firebaseReducer,
  firestore: firestoreReducer,

  // REDUX FORM REDUCER
  form: formReducer,

  // DIALOG REDUCER
  dialog: dialogReducer,

  // GLOBAL REDUCER
  global: globalReducer,

  // DASHBOARD REDUCER
  dashboard: dashboardReducer,

  // CONTACTS REDUCER
  contacts: contactsReducer


});

export default rootReducer;
