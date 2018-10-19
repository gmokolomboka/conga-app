export class Customer {
    id: number;
    civility: string;
    userName: string;
    lastName: string;
    firstName:string;
    email:string
    age: number;
    active: boolean;

    constructor(id, civility?:string, username?: string, lastname?: string,firstname?: string, email?: string,age?: number, active?: boolean) {
        this.id = id;
        this.civility= civility;
        this.userName = username;
        this.lastName = lastname;
        this.firstName = firstname;
        this.email = email;
        this.age = age;
        this.active = active;
    }
}
