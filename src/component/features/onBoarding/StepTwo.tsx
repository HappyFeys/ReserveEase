import Button from "../../common/Button/Button";
import logoLight from "./../../../../src/assets/Logo/ReservEase_light.png"
import { Link } from "react-router-dom";

function StepTwo() {
    return (
        <div className="onboarding__text">
            <img src={logoLight} alt="ReservEase" className="onboarding__img--logo"/>
            <div>
                <h1>Voyagez avec facilité</h1>
                <p>Simplifiez vos réservations et profitez</p>
            </div>
            <div className="onboarding__btn">
                <Link to="/register"><Button textColors="white" bgColors="var(--CeladonBlue)">Register</Button></Link>
                <Link to="/signin"><Button textColors="var(--CeladonBlue)" bgColors="white">Sign in</Button></Link>
            </div>
        </div>
    );
}

export default StepTwo;