import { useEffect, useState } from "react";
import { getFilters } from "../../utils/CreationLogement/creationLogement.service";
import { GetFiltersType, StepProps } from "../../types/createLogement.type";

function StepOneCreate({ onDataChange }: StepProps) {
    const [filter, setFilter] = useState<GetFiltersType | null>(null);
    const [loading, setLoading] = useState(true);
    const [chamber, setChamber] = useState(2);
    const [voyageur, setVoyageur] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFilters();
            setFilter(data as GetFiltersType);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        onDataChange('voyageurs', voyageur);
    }, [voyageur, onDataChange]);

    useEffect(() => {
        onDataChange('chambres', chamber);
    }, [chamber, onDataChange]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        onDataChange(id, value);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onDataChange("options", value, "typeHebergement");
    };

    const handleReduceVoyageur = () => {
        const newValue = Math.max(voyageur - 1, 1);
        setVoyageur(newValue);
    };

    const handleMoreVoyageur = () => {
        const newValue = voyageur + 1;
        setVoyageur(newValue);
    };

    const handleReduceChamber = () => {
        const newValue = Math.max(chamber - 1, 1);
        setChamber(newValue);
    };

    const handleMoreChamber = () => {
        const newValue = chamber + 1;
        setChamber(newValue);
    };

    return (
        <div>
            <h1>Parlez-nous de votre logement</h1>
            <p>Au cours de cette étape, nous allons vous demander quel type de logement vous proposez. Nous vous demanderons ensuite d'indiquer son emplacement et sa capacité d'accueil.</p>
            
            <h2>Parmis les propositions suivantes, laquelle décrit le mieux votre logement ?</h2>

            {filter?.filter.typeHebergement && filter.filter.typeHebergement.map((type) => (
                <div className="form-check" key={type}>
                    <input className="form-check-input" type="radio" name="type" id={type} value={type} onChange={handleRadioChange} />
                    <label className="form-check-label" htmlFor={type}>
                        {type}
                    </label>
                </div>
            ))}

            <h2>Où est situé votre logement ?</h2>
            <div>
                <label htmlFor="pays">Pays : </label>
                <input type="text" name="pays" id="pays" placeholder="Saisissez votre pays" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="adresse">Adresse : </label>
                <input type="text" name="adresse" id="adresse" placeholder="Saisissez votre numéro et libellé de voie" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="ville">Ville : </label>
                <input type="text" name="ville" id="ville" placeholder="Saisissez votre ville" onChange={handleChange} />
            </div>

            <h2>Donnez les informations principales concernant votre logement</h2>
            <div>
                <div>
                    <p>Voyageurs</p>
                    <div>
                        <button onClick={handleReduceVoyageur}>-</button>
                        <input type="number" name="voyageurs" id="voyageurs" value={voyageur} onChange={handleChange} />
                        <button onClick={handleMoreVoyageur}>+</button>
                    </div>
                </div>
                <div>
                    <p>Chambre</p>
                    <div>
                        <button onClick={handleReduceChamber}>-</button>
                        <input type="number" name="chambres" id="chambres" value={chamber} onChange={handleChange} />
                        <button onClick={handleMoreChamber}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepOneCreate;