import { combineReducers } from 'redux';
import patient_reducer from './patient/patient_reducer';
import services_reducer from './services/services_reducer';

export default combineReducers({
    patient_reducer,
    services_reducer
});