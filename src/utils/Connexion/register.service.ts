import { UserRegister} from "../../types/user.type";

const validateLastname = (lastName: string) => {
    return lastName.length > 2;
};

const validateFirstname = (firstName: string) => {
    return firstName.length > 2;
};

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone : string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

export const validatePassword = (password: string) => {
    return password.length >= 8;
};

const validatePasswordRepeat = (password: string, passwordRepeat: string) => {
    return password === passwordRepeat;
};

export const createUser = async (formData : UserRegister) => {
    if (
        validateLastname(formData.lastname) &&
        validateFirstname(formData.firstname) &&
        validateEmail(formData.email) &&
        validatePhone(formData.phonenumber) &&
        validatePassword(formData.password) &&
        validatePasswordRepeat(formData.password, formData.passwordRepeat!)
    ) {
        try{
            const response = await fetch('http://localhost:5001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
        })
        const data = await response.json();
        console.log(data.message);
        console.log(data)
        } catch (error: any) {
            console.error('Error creating user:', error);
            if (error.response) {
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            } else if (error.request) {
                console.log('Request data:', error.request);
            } else {
                console.log('Error message:', error.message);
            }
        }
    } else console.log("Form validation failed");
}