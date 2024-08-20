import { Link } from "react-router-dom";
import star from "./../../../../../src/assets/icons/star.svg"
import point from "./../../../../../src/assets/icons/map-point.svg"
import { Logement } from "../../../../types/home.type";
import CardLogement from "../../../common/cardLogement/CardLogement";

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
                        <CardLogement logement={logement} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularHome;