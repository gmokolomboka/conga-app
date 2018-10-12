import { Customer } from '../models/customer';
import { Actions, CREATE_CUSTOMER, DELETE_CUSTOMER } from '../actions/customer.actions';

const initialState: Customer = {
    id: '1',
    civility : 'Monsieur',
    username: 'gmokolomboka',
    firstname: 'Ghislain',
    lastname: 'Mokolomboka',
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
            return state.filter(({ username }) => username !== action.username);

        default:
            return state;
    }
}
