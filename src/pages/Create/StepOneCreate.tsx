

function StepOneCreate() {

    const typeHebergement = ["Appartement", "Maison", "Chambre d'hôtel", "Bungalow", "Villa", "Cabane", "Studio", "Maison de vacances", "Chambre d'hôte"]

    return (
        <div>
            <h1>Parlez-nous de votre logement</h1>
            <p>Au cours de cette étape, nous allons vous demander quel type de logement vous proposez. Nous vous demanderons ensuite d'indiquer son emplacement et sa capacité d'accueil.</p>
            <form method="post">
                <h2>Parmis les propositions suivantes, laquelle décrit le mieux votre logement ?</h2>

                {typeHebergement.map((type) => (
                    <div className="form-check" key={type}>
                        <input className="form-check-input" type="radio" name="type" id={type} value={type} />
                        <label className="form-check-label" htmlFor={type}>
                            {type}
                        </label>
                    </div>
                ))}
                <h2>Où est situé votre logement ?</h2>
                <div>
                    <label htmlFor="pays">Pays : </label>
                    <input type="text" name="pays" id="pays" placeholder="Saisissez votre pays" />
                </div>
                <div>
                    <label htmlFor="adresse">Adresse : </label>
                    <input type="text" name="adresse" id="adresse" placeholder="Saisissez votre nuémro et libellé de voie" />
                </div>
                <div>
                    <label htmlFor="ville">Ville : </label>
                    <input type="text" name="ville" id="ville" placeholder="Saisissez votre ville" />
                </div>

                <h2>Donnez les informations principales concernant votre logement</h2>
                <div>
                    <div>
                        <p>Voyageurs</p>
                        <div>
                            <button>-</button>
                            <input type="number" name="voyageurs" id="voyageurs" value={2} />
                            <button>+</button>
                        </div>
                    </div>
                    <div>
                        <p>Chambre</p>
                        <div>
                            <button>-</button>
                            <input type="number" name="chambre" id="chambre" value={2} />
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default StepOneCreate;