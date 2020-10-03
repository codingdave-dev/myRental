import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import {
  GET_GLOBAL_DASHBOARD_VALUES,
  GET_GLOBAL_SETTINGS,
} from "../../constants/globalConstants/globalConstants";

export const fetchGlobalSettings = () => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const settingsQuery = firestore.collection("globalSettings");

    try {
      dispatch(asyncActionStart());
      let query = await settingsQuery.get();

      let settings = [];

      for (let i = 0; i < query.docs.length; i++) {
        let setting = {
          ...query.docs[i].data(),
          id: query.docs[i].id,
        };
        settings.push(setting);
      }

      dispatch({
        type: GET_GLOBAL_SETTINGS,
        payload: { settings },
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const fetchGlobalDashboardValues = () => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const valuesQuery = firestore.collection("globalDashboardValues");

    try {
      dispatch(asyncActionStart());
      let query = await valuesQuery.get();

      let values = [];

      for (let i = 0; i < query.docs.length; i++) {
        let value = {
          ...query.docs[i].data(),
          id: query.docs[i].id,
        };
        values.push(value);
      }

      dispatch({
        type: GET_GLOBAL_DASHBOARD_VALUES,
        payload: { values },
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
