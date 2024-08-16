import { ApiResponse } from "../../types/home.type";

const apiURL = import.meta.env.VITE_API_URL;

export const getHome = async (navigate : Function) : Promise<ApiResponse | null > => {
    try {
        const response = await fetch(`${apiURL}/users/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data : ApiResponse = await response.json()
        switch (data.error) {
            case 1:
                console.log(data.message)
                navigate('/signin')
                return null;
            case 2:
                console.log(data.message)
                navigate('/register')
                return null;
            case 3:
                console.log(data.message)
                navigate('/verification')
                return null;
        
            default: console.log("No Error :", data.message);
                return data;
        }
        return data
    } catch (error: any) {
        console.log('Error getting home:', error);
        return null
    }
}