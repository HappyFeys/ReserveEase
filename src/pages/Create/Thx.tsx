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
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>Merci pour votre ajout !</h1>
                <p>Votre logement a bien été ajouté, votre annonce apparaitra dans les 24h.</p>  
            </div>
        </div>
    );
}

export default Thx;