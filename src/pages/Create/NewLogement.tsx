import { useCallback, useState } from "react";
import StepOneCreate from "./StepOneCreate";
import StepTwoCreate from "./StepTwoCreate";
import StepThreeCreate from "./StepThreeCreate";
import StepFourCreate from "./StepFourCreate";
import StepFiveCreate from "./StepFiveCreate";
import { CreateLogementType } from "../../types/createLogement.type";
import VerificationLogement from "./VerificationLogement";
import { createLogement } from "../../utils/CreationLogement/creationLogement.service";
import Thx from "./Thx";
import Back from "../../component/common/Button/Back";

function NewLogement() {

    const [step, setStep] = useState(1);
    const [information, setInformation] = useState<CreateLogementType>({
        title: "",
        ville: "", 
        pays: "",
        adresse:"",
        prix: 0,
        descriptionCourte: "",
        descriptionLongue: "",
        chambres: 0,
        options: {
            localisation: [],
            typeHebergement: [],
            equipements: [],
            accessibilite: [],
            typeSejour: [],
            servicesSupplementaires: [],
            confortEtStyle: [],
            autres: [],
        },
        voyageurs: 0,
        galerie : [],
        imageName : ""
    })

    const onDataChange = useCallback((key: string, data: any, subKey?: string) => {
        setInformation((prevInformation) => {
            if (subKey) {
                return {
                    ...prevInformation,
                    options: {
                        ...prevInformation.options,
                        [subKey]: [data],
                    },
                };
            } else {
                return {
                    ...prevInformation,
                    [key]: data,
                };
            }
        });
    }, []);
    

    const displayStep = (step: number)  => {
        switch (step) {
            case 1:
                return <StepOneCreate onDataChange={onDataChange}/>;
            case 2:
                return <StepTwoCreate onDataChange={onDataChange}/>;
            case 3:
                return <StepThreeCreate onDataChange={onDataChange}/>;
            case 4:
                return <StepFourCreate onDataChange={onDataChange}/>;
            case 5 :
                return <StepFiveCreate onDataChange={onDataChange}/>;
            case 6 :
                return <VerificationLogement information={information} setStep={setStep}/>;
            case 7 :
                return <Thx/>
            default:
                break;
        }
    }

    const handleNext = () => {
        if(step<7){
            setStep(step + 1);
            console.log(information);
        } 
    }
    const handlePrevious = () => {
        if (step === 1) return;
        setStep(step - 1);
    }

    const handleCreate = () =>{
        createLogement(information);
    }
    
    return (
        <div className="new-logement">
            {displayStep(step)}
            <div className="new-logement__buttons" style={step===7? {display: "none"} : {display: "flex"}}>
                <button onClick={handlePrevious} style={step===1? {display: "none"} : {display: "block"}} className="previous">Précédent</button>
                {/* <button onClick={step===6? handleCreate : handleNext}>{step===6? "Valider" : "Suivant"}</button> */}
                <button className="next" onClick={handleNext} style={step===1? {marginLeft: "auto"} : {marginLeft: "0"}}>{step===6? "Valider" : "Suivant"}</button>
            </div>
        </div>
    );
}

export default NewLogement;