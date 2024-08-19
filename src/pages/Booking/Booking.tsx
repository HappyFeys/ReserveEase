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