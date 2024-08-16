import favourite from "./../../../../../src/assets/icons/favourite.svg"
import point from "./../../../../../src/assets/icons/map-point.svg"
import star from "./../../../../../src/assets/icons/star.svg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Logement } from "../../../../types/home.type";

interface HeroProps {
  logements: Logement[]
}

function Hero({logements} : HeroProps) {


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