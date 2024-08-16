import { useEffect, useRef, useState } from "react";
import Back from "../../component/common/Button/Back";
import favorite from "./../../../src/assets/icons/favourite.svg"
import point from "./../../../src/assets/icons/map-point.svg"
import Button from "../../component/common/Button/Button";
import chat from "./../../../src/assets/icons/message.svg"
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../../component/layout/Navigation/NavBar";
import { getDetails } from "../../utils/Details/details.service";
import { ApiResponseDetails } from "../../types/details.type";
function Booking() {

    const [readmore, setReadMore] = useState(true);

    const searchParams = useParams();
    const id = searchParams.id !== undefined? parseInt(searchParams.id) : 1;

    const [details, setDetailsData] = useState<ApiResponseDetails | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDetails(navigate, id);
            setDetailsData(data);
        };

        fetchData();
    }, [navigate, id]);


    // const details = {
    //     id: "1",
    //     imageName: "paris.jpg",
    //     ville: "Paris",
    //     pays: "France",
    //     prix: 120,
    //     rating: 4.7,
    //     description: "Charmant loft au cœur de Paris, à proximité de la Tour Eiffel.",
    //     descriptionLongue : " Magnifique loft situé au cœur de Paris, à deux pas de la Tour Eiffel. Ce lieu unique allie charme parisien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Paris, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce loft est une véritable perle rare pour vivre pleinement l’expérience parisienne. ",
    //     chambres: 2,
    //     options : ['Ville', 'Musées', 'Restaurants', 'Stations de métro','Appartement','Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Balcon/Terrasse','Accès aux personnes handicapées','Séjour longue durée', 'Séjour romantique','Petit-déjeuner inclus', 'Service de ménage','Luxe', 'Moderne','Politique d\'annulation'],
    //     voyageurs: 4,
    //     propriétaire : {
    //         name : "Jhon Doe",
    //         imageName : "john.jpg"
    //     },
    //     galerie : ["ny.jpg", "tokyo.png", "paris.jpg"]
    //   }

    const handleClick = () => {
        setReadMore(!readmore);
    }

    const scrollContainerRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
    
        const handleWheel = (event: WheelEvent) => {
          if (scrollContainer && event.deltaY !== 0) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
          }
        };
    
        if (scrollContainer) {
          scrollContainer.addEventListener('wheel', handleWheel);
        }
    
        return () => {
          if (scrollContainer) {
            scrollContainer.removeEventListener('wheel', handleWheel);
          }
        };
      }, []);

    return (
        <div className="booking">
            <div className="booking__icons">
                <Back />
                <div className="booking__icon">
                    <img src={favorite} alt="favorite" />
                </div>
            </div>
            <img src= {`./../../../src/assets/img/lieu/${details?.logement.imageName}`} alt={details?.logement.ville} className="booking__img"/>
            <div className="booking__details">
                <div className="booking__details--infos">
                    <h1>{details?.logement.ville}</h1>
                    <div className="booking__details--pays">
                        <img src={point} alt="map point" /><p>{details?.logement.pays}</p>
                    </div>
                </div>
                <div className="booking__details--description">
                    <h2>Description</h2>
                    <p>{readmore? details?.logement.description : details?.logement.descriptionLongue} <span onClick={handleClick} className="booking__details--readmore">{readmore? "Lire plus" : "Lire moins"}</span></p>
                </div>
                <div className="booking__details--options">
                    <h2>Inclus dans l'offre</h2>
                    <div className="booking__details--options--details" ref={scrollContainerRef}>
                        {details?.logement.options.map((option, index) => <p key={index}>{option}</p>)}
                    </div>
                </div>
                <div className="booking__details--proprio">
                    <div className="booking__details--proprio--img">
                        <img src={`./../../../src/assets/img/${details?.logement.propriétaire.imageName}`} alt={details?.logement.propriétaire.name} />
                        <p>{details?.logement.propriétaire.name}</p>
                    </div>
                    <Button textColors="var(--CeladonBlue)" bgColors="white"><img src={chat} alt="Chat" />Chat</Button>
                </div>
                <div className="booking__details--galerie">
                    <h2>Galerie</h2>
                    <div className="booking__details--galerie--imgs">
                        {details?.logement.galerie.map((image, index) => <img key={index} src={`./../../../src/assets/img/lieu/${image}`} alt={details?.logement.ville} />)}
                    </div>
                </div>
                <div className="booking__details--booking">
                    <div className="booking__details--booking--price">
                        <p>A partir de :</p>
                        <p><span>{details?.logement.prix}€</span>/nuit</p>
                    </div>
                    <Link to={`/reserver/${details?.logement.id}`}><Button textColors="var(--CeladonBlue)" bgColors="white">Réserver</Button></Link>
                </div>
            </div>
            <NavBar />
        </div>
    );
}

export default Booking;