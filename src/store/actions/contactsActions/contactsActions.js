import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../asyncActions/asyncActions";
import {
  FETCH_ALL_USERS,
} from "../../constants/contactsConstants/contactsConstants";

export const fetchAllUsers = () => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    const userQuery = firestore.collection("users");

    try {
      dispatch(asyncActionStart());
      let query = await userQuery.get();

      let users = [];

      for (let i = 0; i < query.docs.length; i++) {
        let user = {
          ...query.docs[i].data(),
          id: query.docs[i].id,
        };
        users.push(user);
      }

      dispatch({
        type: FETCH_ALL_USERS,
        payload: { users },
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};
