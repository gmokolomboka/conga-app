export class Customer {
    id: string;
    civility: string;
    username : string;
    lastname: string;
    firstname:string;
    email:string
    age: number;
    active: boolean;

    constructor(id?: string, civility?:string, username?: string, lastname?: string,firstname?: string, email?: string,age?: number, active?: boolean) {
        this.id = id;
        this.civility= civility;
        this.username = username;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.age = age;
        this.active = active;
    }
}
