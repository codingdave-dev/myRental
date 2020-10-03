import { createReducer } from "../../../common/util/reducerUtil";
import {FETCH_USER_DASHBOARD_VALUES} from "../../constants/dashboardConstants/dashboardConstants";


const initialState = {
    values: []
};

const getUserDashboardValues = (state, payload) => {
    return {
        ...state,
        values: payload.values,
    };
};


export default createReducer(initialState, {
    [FETCH_USER_DASHBOARD_VALUES]: getUserDashboardValues,
});
