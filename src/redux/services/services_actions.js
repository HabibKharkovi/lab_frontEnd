import { SERVICES_SUBMIT } from './services_types';

export const services_data = data => {
    console.log('action: ', data);
    return {
    type: SERVICES_SUBMIT,
    payload: data
    }}
   
