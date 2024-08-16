const apiURL = import.meta.env.VITE_API_URL;

export const userLogout = async (navigate : Function) => {
    try {
        const response = await fetch(`${apiURL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const data = await response.json();
        console.log(data.message);
        console.log(data);
        navigate('/');
    } catch (error: any) {
        console.log('Error logging out:', error);
    }
}