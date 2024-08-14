export interface UserRegister {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    phonenumber: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface Digicode {
    digicode: string
}