import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Thx() {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/profile");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div>
            <h1>Merci pour votre ajout !</h1>
            <p>Votre logement a bien été ajouté, votre annonce apparaitra dans les 24h.</p>  
        </div>
    );
}

export default Thx;