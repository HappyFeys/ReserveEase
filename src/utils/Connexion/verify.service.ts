const apiURL = import.meta.env.VITE_API_URL;

const validateCode = (code: string) => {
    return code.length === 4;
}

export const validateCodeDigit = (code: string) => {
    const codeRegex = /^\d{4}$/
    return codeRegex.test(code)
}

export const verifyDigicode = async (code: string) => {
    if (validateCode(code)) {
        try {
            const response = await fetch(`${apiURL}/auth/verify-digicode`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code }),
                credentials: 'include'
            })

            const data = await response.json();
            console.log(data.message);
            console.log(data);
        } catch (error: any) {
            console.log('Error verifying code:', error);
        }
    }
}