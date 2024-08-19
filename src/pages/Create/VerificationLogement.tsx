import { CreateLogementType } from "../../types/createLogement.type";

interface VerificationLogementProps {
    information : CreateLogementType
}

function VerificationLogement({information}: VerificationLogementProps ) {
    return (
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>Vérifier si toutes les informations</h1>
                <p>Les informations que vous avez renseignées sont elles correctes ?</p>
            </div>
            <div className="verification">
                <div className="verification__img">
                    <img src={information.imageName} alt={information.title} className="verification__img--main"/>
                    <div className="verification__img--secondary">
                        {information.galerie.length>0 && information.galerie.map((image, index) => (
                            <img key={index} src={image} alt={information.title} className="verification__img--secondary--img"/>
                        ))}
                    </div>
                </div>
                <div className="verification__text">
                    <div>
                        <p>Le titre de l'annonce : </p>
                        <h2>{information.title}</h2>
                    </div>
                    <div>
                        <p>La description courte de l'annonce : </p>
                        <p>{information.descriptionCourte}</p>
                    </div>
                    <div>
                        <p>La description longue de l'annonce : </p>
                        <p>{information.descriptionLongue}</p>
                    </div>
                    <div>
                        <p>Le nombre de chambres : </p>
                        <p>{information.chambres}</p>
                    </div>
                    <div>
                        <p>Le nombre de voyageurs maximum: </p>
                        <p>{information.voyageurs}</p>
                    </div>
                    <div>
                        <p>Les options : </p>
                        <div>
                            {information.options.accessibilite.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.equipements.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.localisation.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.confortEtStyle.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.autres.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.servicesSupplementaires.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.typeHebergement.map((option) => (<p key={option}>{option}</p>))}
                            {information.options.typeSejour.map((option) => (<p key={option}>{option}</p>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerificationLogement;