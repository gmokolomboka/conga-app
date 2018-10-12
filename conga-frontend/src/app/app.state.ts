import { Customer } from './pages/customers/models/customer';

export interface AppState {
    readonly customer: Customer[];
}
