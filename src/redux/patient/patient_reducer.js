import { SUBMIT } from './patient_types';

const patient_reducer = async (state = {}, action) => {
    switch(action.type){
        case SUBMIT:
            const a = await fetch('http://localhost:3000/api/v1/patients', {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const b = await a.json();
            return {
                state: b
            }
            
        default:
            return state;
    }
}

export default patient_reducer;