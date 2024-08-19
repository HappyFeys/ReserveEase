import { StepProps } from "../../types/createLogement.type";

function StepFourCreate({onDataChange}: StepProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        onDataChange(id, value);
    };

    return (
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>A présent, donnez un titre et une description à votre annonce.</h1>
                <p>Les titres courts sont généralement les plus efficaces. Ne vous inquiétez pas, vous pourrez toujours le modifier plus tard.</p>
            </div>

            <div className="stepCreate__form stepCreate__form--title">
                <h2>Créez votre titre</h2>
                <label htmlFor="title">Titre de votre annonce</label>
                <input type="text" id="title" onChange={handleChange}/>
            </div>

            <div className="stepCreate__form">
                
                <h2>Créez votre description</h2>
                <p>Racontez ce qui rend votre logement unique.</p>

                <div className="stepCreate__form--text">
                    <h3>Tout d'abord, une description courte</h3>
                    <p>Décrivez de façon brève votre habitation, c'est ce qui   apparaitra dans un premier temps sur votre annonce.</p>
                    <label htmlFor="descriptionCourte">Description courte</label>
                    <input type="text" id="descriptionCourte" onChange= {handleChange}/>
                </div>

                <div className="stepCreate__form--text">
                    <h3>Ensuite, une description longue</h3>
                    <p>Donnez plus de détails sur votre logement.</p>
                    <label htmlFor="descriptionLongue">Description longue</label>
                    <input type="text" id="descriptionLongue" onChange= {handleChange}/>
                </div>
            </div>
        </div>
    );
}

export default StepFourCreate;