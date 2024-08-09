import { useState } from "react";
import imgOnboard from "./../../src/assets/img/beach-onboard.jpg";
import StepOne from "../component/features/onBoarding/StepOne";
import StepTwo from "../component/features/onBoarding/StepTwo";

function OnBoarding() {

    const [showRegister, setShowRegister] = useState(true);

    const handleClick = () => {
        setShowRegister(false);
    }

    return (
        <div className="onboarding">
            <img src={imgOnboard} alt="Réserver sans soucis !" className="onboarding__img--main"/>
            {showRegister? <StepOne onClick={handleClick}/>: <StepTwo/>}
            
        </div>
    );
}

export default OnBoarding;