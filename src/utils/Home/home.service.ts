
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
        switch (data.error) {
            case 1:
                console.log(data.message)
                navigate('/signin')
                break;
            case 2:
                console.log(data.message)
                navigate('/register')
                break;
            case 3:
                console.log(data.message)
                navigate('/verification')
                break;
        
            default: console.log("Error", data.message);
                break;
        }
        return data;
    } catch (error: any) {
        console.log('Error getting home:', error);
    }
}