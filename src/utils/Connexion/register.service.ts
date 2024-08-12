export const validateLastname = (lastName: string) => {
    return lastName.length > 2;
};

export const validateFirstname = (firstName: string) => {
    return firstName.length > 2;
};

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
    return password.length >= 8;
};

export const validatePasswordRepeat = (password: string, passwordRepeat: string) => {
    return password === passwordRepeat;
};