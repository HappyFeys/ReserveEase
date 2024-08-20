import { Logement } from "../../../types/home.type";
import point from "./../../../../src/assets/icons/map-point.svg"
import star from "./../../../../src/assets/icons/star.svg"

interface CardLogementProps {
    logement: Logement
}

function CardLogement({logement}: CardLogementProps) {
    return (
        <>
            <div className="card--left">
                <img src={`./../../../../src/assets/img/lieu/${logement.imageName}`} alt={logement.ville} />
                <div className="popular__description">
                    <p className="popular__ville">{logement.ville}</p>
                    <p className="popular__pays"><img src={point} alt="Map point icons" />{logement.pays}</p>
                </div>
            </div>
            <div className="popular__rating">
                <div className="rating">
                    <p className="popular__rating--number">{logement.rating}</p>
                    <img src={star} alt="Etoile" />
                </div>
                <p className="prix">{logement.prix}€</p>
            </div>
        </>
    );
}

export default CardLogement;