import { useEffect, useState } from "react";
import { Filters } from "../../types/home.type";
import { getFilters } from "../../utils/CreationLogement/creationLogement.service";

function StepTwoCreate() {
    const equipements = ["Wi-Fi","Climatisation","Chauffage","Cuisine équipée","Lave-linge","Sèche-linge","Télévision","Parking","Piscine","Jacuzzi","BBQ","Balcon/Terrasse","Jardin","Ascenseur"]
    const confortEtStyle = ["Luxe","Budget","Moderne","Classique","Rustique","Éco-responsable"]
    const servicesSupplementaires = ["Petit-déjeuner inclus","Service de ménage","Transfert aéroport","Service de conciergerie","Animaux acceptés","Fumeur/non-fumeur"]
    const localisation =["Ville","Quartier","Région","Pays","Plages","Musées","Restaurants","Stations de métro","Bus","Gares"]

    const [filter, setFilter] = useState<Filters | null>(null);

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getFilters();
            setFilter(data);
        }
        fetchData()

    }, [])

    return (
        <div>
            <h1>Faites sortir votre annonce du lot</h1>
            <p>Au cours de cette étape, vous pourrez ajouter certains des équipements proposés dans votre logement et au moins 5 photos. Vous pourrez ensuite ajouter un titre et une description.</p>
        
                <div>
                    <h2>Indiquez aux voyageurs quels sont les équipements de votre  logement</h2>
                    <p>Vous pourrez ajouter des équipements une fois votre annonce publiée</p>
                </div>
                <div>
                    <h3>Y-a-t-il des endroits intéressants près de chez vous ?</h3>
                    {localisation.map((localisation) => (
                        <div key={localisation}>
                            <input type="checkbox" id={localisation} name="localisation" value={localisation} />
                            <label htmlFor={localisation}>{localisation}</label>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Qu'en est-il de ces équipements préférés des voyageurs ?</h3>
                    {equipements.map((equipement) => (
                        <div key={equipement}>
                            <input type="checkbox" id={equipement} name="equipement" value={equipement} />
                            <label htmlFor={equipement}>{equipement}</label>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Comment qualifiez-vous votre logement ?</h3>
                    {confortEtStyle.map((confortEtStyle) => (
                        <div key={confortEtStyle}>
                            <input type="checkbox" id={confortEtStyle} name="confortEtStyle" value={confortEtStyle} />
                            <label htmlFor={confortEtStyle}>{confortEtStyle}</label>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Un petit plus à proposer à vos visiteurs ?</h3>
                    {servicesSupplementaires.map((servicesSupplementaires) => (
                        <div key={servicesSupplementaires}>
                            <input type="checkbox" id={servicesSupplementaires} name="servicesSupplementaires" value={servicesSupplementaires} />
                            <label htmlFor={servicesSupplementaires}>{servicesSupplementaires}</label>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default StepTwoCreate;