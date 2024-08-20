import { CreateLogementType } from "../../types/createLogement.type";

interface VerificationLogementProps {
    information : CreateLogementType
    setStep: (step: number) => void
}

function VerificationLogement({information, setStep}: VerificationLogementProps ) {
    return (
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>Vérifier si toutes les informations</h1>
                <p>Les informations que vous avez renseignées sont elles correctes ?</p>
            </div>
            <div className="verificationCreate">
                <div className="verification__img">
                <span onClick={() => setStep(3)} className="modifier">Modifier</span>
                    <img src={`./../../../src/assets/img/lieu/${information.imageName}`} alt={information.title} className="verification__img--main"/>
                    <div className="verification__img--secondary">
                        {information.galerie.length>0 && information.galerie.map((image, index) => (
                            <img key={index} src={`./../../../src/assets/img/lieu/${image.name}`} alt={information.title} className="verification__img--secondary--img"/>
                        ))}
                    </div>
                </div>
                <div className="verification__text">
                    <div className="verification__text--container">
                        <p className="verification__text--title">Le titre de l'annonce : </p>
                        <span onClick={() => setStep(4)} className="modifier">Modifier</span>
                        <h2>{information.title}</h2>
                    </div>
                    <div className="verification__text--container">
                        <p className="verification__text--title">L'adresse complète : </p>
                        <span onClick={() => setStep(1)} className="modifier">Modifier</span>
                        <p>{information.ville} {information.adresse}, {information.pays}</p>
                    </div>
                    <div className="verification__text--container">
                        <p className="verification__text--title">La description courte de l'annonce : </p>
                        <span onClick={() => setStep(4)} className="modifier">Modifier</span>
                        <p>{information.descriptionCourte}</p>
                    </div>
                    <div className="verification__text--container">
                        <p className="verification__text--title">La description longue de l'annonce : </p>
                        <span onClick={() => setStep(4)} className="modifier">Modifier</span>
                        <p>{information.descriptionLongue}</p>
                    </div>
                    <div className="verification__text--container container--flex">
                        <p className="verification__text--title">Le nombre de chambres : </p>
                        <span onClick={() => setStep(1)} className="modifier">Modifier</span>
                        <p>{information.chambres}</p>
                    </div>
                    <div className="verification__text--container container--flex">
                        <p className="verification__text--title">Le nombre de voyageurs maximum: </p>
                        <span onClick={() => setStep(1)} className="modifier">Modifier</span>
                        <p>{information.voyageurs}</p>
                    </div>
                    <div className="verification__text--container">
                        <p className="verification__text--title">Les options que vous avez sélectionnées : </p>
                        <span onClick={() => setStep(2)} className="modifier">Modifier</span>
                        <div className="verification__text--options">
                            {information.options.accessibilite.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)):<div key={`${index}`}>{option}</div>
                            )}
                            {information.options.equipements.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)):<div key={`${index}`}>{option}</div>
                            )}
                            {information.options.localisation.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                            {information.options.confortEtStyle.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                            {information.options.autres.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                            {information.options.servicesSupplementaires.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                            {information.options.typeHebergement.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                            {information.options.typeSejour.flatMap((option, index) => 
                                Array.isArray(option)? option.map((item, subIndex) => (<div key={`${index}-${subIndex}`}>{item}</div>)): <div key={`${index}`}>{option}</div>
                            )}
                    </div>

                    </div>
                    <div className="verification__text--container">
                        <p className="verification__text--title">Le prix de la nuit : </p>
                        <span onClick={() => setStep(5)} className="modifier">Modifier</span>
                        <p>{information.prix} €/<span style={{fontWeight:600}}>nuit</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerificationLogement;