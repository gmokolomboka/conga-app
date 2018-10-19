import { Customer } from '../models/customer';
import { Actions, CREATE_CUSTOMER, DELETE_CUSTOMER } from '../actions/customer.actions';

const initialState: Customer = {
    id: '1',
    civility : 'Monsieur',
    userName: 'gmokolomboka',
    firstName: 'Ghislain',
    lastName: 'Mokolomboka',
    email: 'test@test.fr',
    age: 42,
    active: true
};

export function reducer(
    state: Customer[] = [initialState],
    action: Actions) {

    switch (action.type) {
        case CREATE_CUSTOMER:
            return [...state, action.payload];

        case DELETE_CUSTOMER:
            return state.filter(({ userName }) => userName !== action.userName);

        default:
            return state;
    }
}
