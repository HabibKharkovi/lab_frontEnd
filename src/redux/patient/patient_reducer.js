import { SUBMIT } from './patient_types';

const initialState = {
    data: []
}

const patient_reducer = (state = initialState, action) => {
    switch(action.type){
        case SUBMIT:
            console.log('submit form');
            break;
        default:
            return state;
    }
}

export default patient_reducer;