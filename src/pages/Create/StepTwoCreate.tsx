import { useEffect, useState } from "react";
import { getFilters } from "../../utils/CreationLogement/creationLogement.service";
import { GetFiltersType, StepProps } from "../../types/createLogement.type";

function StepTwoCreate({ onDataChange }: StepProps) {

    const [filter, setFilter] = useState<GetFiltersType | null>(null);
    const [loading, setLoading] = useState(true);

    const [localisation, setLocalisation] = useState<string[]>([]);
    const [equipements, setEquipements] = useState<string[]>([]);
    const [confortEtStyle, setConfortEtStyle] = useState<string[]>([]);
    const [servicesSupplementaires, setServicesSupplementaires] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFilters();
            setFilter(data as GetFiltersType);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        onDataChange("options",  localisation, "localisation");
        onDataChange("options",  equipements, "equipements");
        onDataChange("options",  confortEtStyle, "confortEtStyle");
        onDataChange("options",  servicesSupplementaires, "servicesSupplementaires");
    }, [localisation, equipements, confortEtStyle, servicesSupplementaires, onDataChange]);

    const handleCheckboxChange = (category: string, value: string) => {
        switch (category) {
            case 'localisation':
                setLocalisation(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            case 'equipements':
                setEquipements(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            case 'confortEtStyle':
                setConfortEtStyle(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            case 'servicesSupplementaires':
                setServicesSupplementaires(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
                break;
            default:
                break;
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Faites sortir votre annonce du lot</h1>
            <p>Au cours de cette étape, vous pourrez ajouter certains des équipements proposés dans votre logement. Vous pourrez ensuite ajouter un titre et une description et au moins 5 photos.</p>
        
            <div>
                <h2>Indiquez aux voyageurs quels sont les équipements de votre logement</h2>
                <p>Vous pourrez ajouter des équipements une fois votre annonce publiée</p>
            </div>
            <div>
                <h3>Y-a-t-il des endroits intéressants près de chez vous ?</h3>
                {filter?.filter.localisation.map(localisation => (
                    <div key={localisation}>
                        <input
                            type="checkbox"
                            id={localisation}
                            name="localisation"
                            value={localisation}
                            onChange={() => handleCheckboxChange('localisation', localisation)}
                        />
                        <label htmlFor={localisation}>{localisation}</label>
                    </div>
                ))}
            </div>
            <div>
                <h3>Qu'en est-il de ces équipements préférés des voyageurs ?</h3>
                {filter?.filter.equipements.map(equipement => (
                    <div key={equipement}>
                        <input
                            type="checkbox"
                            id={equipement}
                            name="equipement"
                            value={equipement}
                            onChange={() => handleCheckboxChange('equipements', equipement)}
                        />
                        <label htmlFor={equipement}>{equipement}</label>
                    </div>
                ))}
            </div>
            <div>
                <h3>Comment qualifiez-vous votre logement ?</h3>
                {filter?.filter.confortEtStyle.map(confortEtStyle => (
                    <div key={confortEtStyle}>
                        <input
                            type="checkbox"
                            id={confortEtStyle}
                            name="confortEtStyle"
                            value={confortEtStyle}
                            onChange={() => handleCheckboxChange('confortEtStyle', confortEtStyle)}
                        />
                        <label htmlFor={confortEtStyle}>{confortEtStyle}</label>
                    </div>
                ))}
            </div>
            <div>
                <h3>Un petit plus à proposer à vos visiteurs ?</h3>
                {filter?.filter.servicesSupplementaires.map(servicesSupplementaires => (
                    <div key={servicesSupplementaires}>
                        <input
                            type="checkbox"
                            id={servicesSupplementaires}
                            name="servicesSupplementaires"
                            value={servicesSupplementaires}
                            onChange={() => handleCheckboxChange('servicesSupplementaires', servicesSupplementaires)}
                        />
                        <label htmlFor={servicesSupplementaires}>{servicesSupplementaires}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StepTwoCreate;
