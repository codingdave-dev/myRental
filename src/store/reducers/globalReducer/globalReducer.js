import { createReducer } from "../../../common/util/reducerUtil";
import { GET_GLOBAL_SETTINGS } from "../../constants/globalConstants/globalConstants";

const initialState = {
  settings: [],
};

const getGlobalSettings = (state, payload) => {
  return {
    ...state,
    settings: payload.settings,
  };
};

export default createReducer(initialState, {
  [GET_GLOBAL_SETTINGS]: getGlobalSettings,
});
