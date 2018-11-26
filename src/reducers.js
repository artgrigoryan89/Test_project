import { combineReducers } from 'redux';
import dashboardReducer from './module/form_module';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
});

export default rootReducer;
