const moment = require("moment");
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import { FETCH_USER_DASHBOARD_VALUES } from "../../constants/dashboardConstants/dashboardConstants";

export const fetchUserDashboardValues = (id) => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    let m1 = moment();
    let m2 = moment();
    m1.startOf("day");
    m2.endOf("day");

    const startDate = firebase.firestore.Timestamp.fromDate(m1.toDate());
    const endDate = firebase.firestore.Timestamp.fromDate(m2.toDate());

    const dashboardQuery = firestore
      .collection("userDashboardValues")
      .doc(`${id}`);
    const activityQuery = firestore
      .collection("activities")
      .where("addedBy", "==", `${id}`)
      .where("due", ">=", startDate);

    const shortagesQuery = firestore
      .collection("orders")
      .where("addedBy", "==", `${id}`)
      .where("shortages", "==", true);

    try {
      dispatch(asyncActionStart());
      let query = await dashboardQuery.get();

      let acitvity = await activityQuery.get();
      let shortages = await shortagesQuery.get();


      let values = [];

      if (query.exists) {
        let value = {
          id: query.id,
          ...query.data(),
          acitvity: acitvity.size,
          shortages: shortages.size,
        };
        values.push(value);
      }

      if (!query.exists) {
        return;
      }
      dispatch({
        type: FETCH_USER_DASHBOARD_VALUES,
        payload: { values },
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
