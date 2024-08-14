import favourite from "./../../../../../src/assets/icons/favourite.svg"
import point from "./../../../../../src/assets/icons/map-point.svg"
import star from "./../../../../../src/assets/icons/star.svg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Logement } from "../../../../types/home.type";


// function Hero({logements} : Logement[]) {
function Hero() {

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
        <div className="hero">
                <h2>Parce que vous avez regardé ...</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">

            {logements.map((logement) => (
                <SwiperSlide><div key={logement.id} className="hero__card" style={{backgroundImage: `url(./../../../../../src/assets/img/lieu/${logement.imageName})`}}>
                <img src={favourite} alt="Favoris" className="hero__card--favourite" />
                <div className="hero__card--content">
                    <div className="hero__card--text">
                        <p className="pville">{logement.ville}</p>
                        <p className="pimg"><img src={point} alt="Point géographique" className="hero__card--point"/>{logement.pays}</p>
                    </div>
                    <div className="hero__card--rate">
                        <p className="pimg"><img src={star} alt="rating" />{logement.rating}</p>
                        <p className="hero__card--price">{logement.prix}€</p>
                    </div>
                </div>
            </div></SwiperSlide>
            ))}
      
      
    </Swiper>


        </div>
    );
}

export default Hero;