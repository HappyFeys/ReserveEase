import { useState } from "react";
import { verifyDigicode, validateCodeDigit } from "../../utils/Connexion/verify.service";

function Verification() {

    const [code, setCode] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateCodeDigit(code)) {
            verifyDigicode(code)
        } else console.log("Error validation code, not a 4 digit number");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    return (
        <div>
            <h1>Entrez votre code de vérification</h1>
            <p>Entrez le code que vous avez recu par email.</p>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="digicode" id="digicode" onChange={handleChange}/>
                <input type="submit" />
            </form>

        </div>
    );
}

export default Verification;