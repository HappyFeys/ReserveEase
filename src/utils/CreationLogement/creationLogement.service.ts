import { CreateLogementType, GetFiltersType } from "../../types/createLogement.type";

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
        const data : GetFiltersType = await response.json();
        console.log(data);
        return data;
    } catch (error : any) {
        console.error('Error:', error);
    }
}

export const createLogement = async (information : CreateLogementType) => {
    if(information){
        try {
            const response = await fetch(`${apiURL}/users/logement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(information),
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error : any) {
            console.error('Error:', error);
        }
    } else console.log("No information provided");
}