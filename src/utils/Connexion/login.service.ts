import { UserLogin } from "../../types/user.type";
import { validateEmail, validatePassword } from "./register.service";

const apiURL = import.meta.env.VITE_API_URL;

export const userLogin = async ( formData : UserLogin, navigate : Function ) => {
    if (
        validateEmail(formData.email) &&
        validatePassword(formData.password)
    ) {
        try {
            const response = await fetch(`${apiURL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            })
            const data = await response.json();
            console.log(data.message);
            console.log(data)
            navigate('/home')
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