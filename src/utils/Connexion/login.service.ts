import { UserLogin } from "../../types/user.type";
import { validateEmail, validatePassword } from "./register.service";

export const userLogin = async ( formData : UserLogin ) => {
    if (
        validateEmail(formData.email) &&
        validatePassword(formData.password)
    ) {
        try {
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