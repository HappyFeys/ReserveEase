export interface UserRegister {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    passwordRepeat?: string;
    phonenumber: string;
}

export interface UserLogin {
    email: string;
    password: string;
}