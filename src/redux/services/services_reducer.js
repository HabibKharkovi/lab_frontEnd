import { SERVICES_SUBMIT } from './services_types';

const services_reducer = async (state = {}, action) => {
    switch(action.type){
        case SERVICES_SUBMIT:
            const a = await fetch('http://localhost:3000/api/v1/services', {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const b = await a.json();
            console.log(b)
            
        default:
            return state;
    }
}

export default services_reducer;