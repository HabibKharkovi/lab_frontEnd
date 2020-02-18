import { SUBMIT } from './patient_types';

export const patient_data = data => dispatch({
        type: SUBMIT,
        payload: data
    })
