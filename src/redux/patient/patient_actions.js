import { SUBMIT } from './patient_types';

export const patient_data = data => {
    console.log('action: ', data);
    return {
    type: SUBMIT,
    payload: data
    }}
   
