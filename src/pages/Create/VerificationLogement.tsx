import { CreateLogementType } from "../../types/createLogement.type";

interface VerificationLogementProps {
    information : CreateLogementType
}

function VerificationLogement({information}: VerificationLogementProps ) {
    return (
        <div>
            <h1>Vérifier si toutes les informations</h1>
        </div>
    );
}

export default VerificationLogement;