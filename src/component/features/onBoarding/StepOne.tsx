import Button from "../../common/Button/Button";
import logoLight from "./../../../../src/assets/Logo/ReservEase_light.png"

type StepOneProps = {
    onClick: () => void
}

function StepOne({onClick}: StepOneProps) {
    return (
        <div className="onboarding__text">
                <img src={logoLight} alt="ReservEase" className="onboarding__img--logo"/>
                <div>
                    <h1>Réservez, détendez-vous, profitez !</h1>
                    <p>Chez ReservEase, trouvez et réservez facilement des hébergements uniques pour vos voyages, partout dans le monde.</p>
                </div>
                <Button textColors="white" bgColors="var(--CeladonBlue)" onClick={onClick}>Voyageons</Button>
            </div>
    );
}

export default StepOne;