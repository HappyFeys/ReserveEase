import Back from "../../component/common/Button/Back";
import map from "./../../../src/assets/icons/map-point.svg"
import calendar from "./../../../src/assets/icons/calendar.svg"
import travelers from "./../../../src/assets/icons/travelers.svg"
import euro from "./../../../src/assets/icons/euro.svg"

function BookingDetails() {

    const details = {
        id: "1",
        imageName: "paris.jpg",
        ville: "Paris",
        pays: "France",
        prix: 120,
        rating: 4.7,
        description: "Charmant loft au cœur de Paris, à proximité de la Tour Eiffel.",
        descriptionLongue : " Magnifique loft situé au cœur de Paris, à deux pas de la Tour Eiffel. Ce lieu unique allie charme parisien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Paris, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce loft est une véritable perle rare pour vivre pleinement l’expérience parisienne. ",
        chambres: 2,
        options : ['Ville', 'Musées', 'Restaurants', 'Stations de métro','Appartement','Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Balcon/Terrasse','Accès aux personnes handicapées','Séjour longue durée', 'Séjour romantique','Petit-déjeuner inclus', 'Service de ménage','Luxe', 'Moderne','Politique d\'annulation'],
        voyageurs: 4,
        propriétaire : {
            name : "Jhon Doe",
            imageName : "john.jpg"
        },
        galerie : ["ny.jpg", "tokyo.png", "paris.jpg"]
    }



    return (
        <div className="booking__details">
            <Back />
            <h1>Détails de réservation</h1>
            <form method="post" className="booking__details__form">
                <div className="booking__details__form--elem">
                    <img src={map} alt="map" />
                    <div>
                        <p>Ville / Pays</p>
                        <p>{details.ville}</p>
                        <p>{details.pays}</p>
                    </div>
                    <p className="price">{details.prix}€/nuit</p>
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
                    <p className="price">{details.prix}€</p>
                </div>
                <input type="submit" value="Procéder au paiement" />
            </form>
        </div>
    );
}

export default BookingDetails;