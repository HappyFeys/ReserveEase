
const apiURL = import.meta.env.VITE_API_URL;

export const getHome = async (navigate : Function) => {
    try {
        const response = await fetch(`${apiURL}/users/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.log('Error getting home:', error);
        switch (error.error) {
            case 1:
                navigate('/login')
                break;
            case 2:
                navigate('/register')
                break;
            case 3:
                navigate('/verification')
                break;
        
            default: console.log("Error", error);
                break;
        }
    }
}