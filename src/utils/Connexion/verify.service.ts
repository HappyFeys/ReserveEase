import { Digicode } from "../../types/user.type";

const apiURL = import.meta.env.VITE_API_URL;

export const isValidFourDigitCode = (code: string): boolean => {
  const fourDigitCodeRegex = /^\d{4}$/;
  return fourDigitCodeRegex.test(code);
}


export const verifyDigicode = async (code: Digicode, navigate : Function) => {
    if (isValidFourDigitCode(code.digicode)) {
        try {
            console.log(code)
            const response = await fetch(`${apiURL}/auth/verify-digicode`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(code),
                credentials: 'include'
            })

            const data = await response.json();
            console.log(data.message);
            console.log(data);
            navigate('/home')
        } catch (error: any) {
            console.log('Error verifying code:', error);
        }
    } else console.log("Code invalide");
}
