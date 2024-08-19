import { Filters } from "../../types/home.type";

const apiURL = import.meta.env.VITE_API_URL;

export const getFilters = async () => {
    try {
        const response = await fetch(`${apiURL}/users/filter`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data : Filters = await response.json();
        return data;
    } catch (error : any) {
        console.error('Error:', error);
    }
}