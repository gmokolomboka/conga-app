import { Customer } from '../models/customer';
import { Actions, CREATE_CUSTOMER, DELETE_CUSTOMER,CREATE_CUSTOMER_SUCCESS, CREATE_CUSTOMER_FAILED } from '../actions/customer.actions';

const initialState: Customer = {
    id: 1,
    civility : 'Monsieur',
    userName: 'gmokolomboka',
    firstName: 'Ghislain',
    lastName: 'Mokolomboka',
    email: 'test@test.fr',
    age: 42,
    active: true
};

export function reducer(
    state: Customer[] = [],
    action: Actions) {

    switch (action.type) {
       
        case CREATE_CUSTOMER_SUCCESS:
            return [...state, action.payload];
        
        case CREATE_CUSTOMER_FAILED:
            return [...state, action.erreur];

        case DELETE_CUSTOMER:
            return state.filter(({ id }) =>  id !== action.id);
            
        default:
            return state;
    }
}
