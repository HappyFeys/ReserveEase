import { Link } from "react-router-dom";
import star from "./../../../../../src/assets/icons/star.svg"
import point from "./../../../../../src/assets/icons/map-point.svg"
import { Logement } from "../../../../types/home.type";

function PopularHome() {
// function PopularHome({logements} : Logement[]) {

    const logements = [
        {
          id: "1",
          imageName: "paris.jpg",
          ville: "Paris",
          pays: "France",
          prix: 120,
          rating: 4.7,
          description: "Charmant loft au cœur de Paris, à proximité de la Tour Eiffel.",
          chambres: 2,
          voyageurs: 4
        },
        {
          id: "2",
          imageName: "tokyo.png",
          ville: "Tokyo",
          pays: "Japon",
          prix: 80,
          rating: 4.9,
          description: "Studio moderne avec vue sur la ville, idéal pour un couple.",
          chambres: 1,
          voyageurs: 2
        },
        {
          id: "3",
          imageName: "ny.jpg",
          ville: "New York",
          pays: "États-Unis",
          prix: 250,
          rating: 4.8,
          description: "Penthouse luxueux avec vue sur Central Park.",
          chambres: 3,
          voyageurs: 6
        },
        {
          id: "4",
          imageName: "rome.jpg",
          ville: "Rome",
          pays: "Italie",
          prix: 95,
          rating: 4.6,
          description: "Appartement spacieux près du Colisée, parfait pour une famille.",
          chambres: 2,
          voyageurs: 5
        },
        {
          id: "5",
          imageName: "sydney.jpg",
          ville: "Sydney",
          pays: "Australie",
          prix: 300,
          rating: 4.9,
          description: "Villa avec piscine et vue sur la plage de Bondi.",
          chambres: 4,
          voyageurs: 8
        }
      ];

    return (
        <div className="popular">
            <div className="popular__header">
                <h2>Les plus populaires</h2>
                <Link to={"/"}>Tout voir</Link>
            </div>

            <div className="popular__container">
                {logements.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id} className="popular__card">
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