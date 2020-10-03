import { createReducer } from "../../../common/util/reducerUtil";
import {GET_GLOBAL_DASHBOARD_VALUES, GET_GLOBAL_SETTINGS} from "../../constants/globalConstants/globalConstants";

const initialState = {
  settings: [],
  values: []
};

const getGlobalSettings = (state, payload) => {
  return {
    ...state,
    settings: payload.settings,
  };
};

const getGlobalDashboardValues = (state, payload) => {
  return {
    ...state,
    values: payload.values,
  };
};

export default createReducer(initialState, {
  [GET_GLOBAL_SETTINGS]: getGlobalSettings,
  [GET_GLOBAL_DASHBOARD_VALUES]: getGlobalDashboardValues,
});
