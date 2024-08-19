import { Link } from "react-router-dom";
import star from "./../../../../../src/assets/icons/star.svg"
import point from "./../../../../../src/assets/icons/map-point.svg"
import { Logement } from "../../../../types/home.type";

interface PopularHomeProps {
  logements: Logement[]
}

function PopularHome({logements} : PopularHomeProps) {

    return (
        <div className="popular">
            <div className="popular__header">
                <h2>Les plus populaires</h2>
                <Link to={"/"}>Tout voir</Link>
            </div>

            <div className="popular__container">
                {logements.map((logement) => (
                    <Link to={`/booking/${logement.id}`} key={logement.id} className="popular__card">
                        <div className="card--left">
                            <img src={`./../../../../../src/assets/img/lieu/${logement.imageName}`} alt={logement.ville} />
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
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularHome;