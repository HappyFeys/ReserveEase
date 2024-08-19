import { useState } from "react";
import StepOneCreate from "./StepOneCreate";

function NewLogement() {

    const [step, setStep] = useState(1);

    const displayStep = (step: number)  => {
        switch (step) {
            case 1:
                return <StepOneCreate />;
        
            default:
                break;
        }
    }

    const handleNext = () => {
        setStep(step + 1);
    }
    const handlePrevious = () => {
        if (step === 1) return;
        setStep(step - 1);
    }

    return (
        <div>
            {displayStep(step)}
            <div>
                <button onClick={handlePrevious}>Précédent</button>
                <button onClick={handleNext}>Suivant</button>
            </div>
        </div>
    );
}

export default NewLogement;