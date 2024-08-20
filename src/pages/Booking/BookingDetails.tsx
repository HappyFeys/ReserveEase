import Back from "../../component/common/Button/Back";
import map from "./../../../src/assets/icons/map-point.svg"
import calendar from "./../../../src/assets/icons/calendar.svg"
import travelers from "./../../../src/assets/icons/travelers.svg"
import euro from "./../../../src/assets/icons/euro.svg"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiResponseDetails } from "../../types/details.type";
import { getDetails } from "../../utils/Details/details.service";
import "cally";
import Picker from "../../component/features/Booking/Picker";

function BookingDetails() {

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



    return (
        <div className="booking__details">
            <Back />
            <h1>Détails de réservation</h1>
            <form method="post" className="booking__details__form">
                <div className="booking__details__form--elem">
                    <img src={map} alt="map" />
                    <div>
                        <p>Ville / Pays</p>
                        <p>{details?.logement.ville}</p>
                        <p>{details?.logement.pays}</p>
                    </div>
                    <p className="price">{details?.logement.prix}€/nuit</p>
                </div>
                <div className="booking__details__form--elem">
                    <img src={calendar} alt="calendar" />
                    <div>
                        <label htmlFor="checkin">Check in</label>
                        <input type="date" name="checkin" id="checkin" />
                    </div>
                    <div>
                        <label htmlFor="checkout">Check out</label>
                        <input type="date" name="checkout" id="checkout" />
                    </div>
                </div>
                <div className="booking__details__form--elem picker">
                    <Picker value="2" onChange={() => {}}/>
                </div>
                <div className="booking__details__form--elem">
                    <img src={travelers} alt="travelers" />
                    <div>
                        <label htmlFor="travelers">Nombre de personnes</label>
                        <input type="number" name="travelers" id="travelers" />
                    </div>
                </div>
                <hr />
                <div className="booking__details__form--elem--total">
                    <img src={euro} alt="Euro logo" />
                    <p>Prix total :</p>
                    <p className="price">{details?.logement.prix}€</p>
                </div>
                <input type="submit" value="Procéder au paiement" />
            </form>
        </div>
    );
}

export default BookingDetails;