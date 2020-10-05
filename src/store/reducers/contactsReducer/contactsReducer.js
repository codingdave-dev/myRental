import { createReducer } from "../../../common/util/reducerUtil";
import {
    FETCH_ALL_USERS
} from "../../constants/contactsConstants/contactsConstants";



const initialState = {
    users: []
};

const getAllUsers = (state, payload) => {
    return {
        ...state,
        users: payload.users,
    };
};


export default createReducer(initialState, {
    [FETCH_ALL_USERS]: getAllUsers,
});