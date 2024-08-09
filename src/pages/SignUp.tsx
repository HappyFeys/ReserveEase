import { Link } from "react-router-dom";
import SignUpHeader from "../component/features/SignUp/SignUpHeader";
import { useState } from "react";


function SignUp() {
    const [isEmailSelected, setIsEmailSelected] = useState(false);
    const [isPasswordSelected, setIsPasswordSelected] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleClickEmail = () => {
        setIsEmailSelected(true);
        
    };

    const handleClickMdp = () =>{
        setIsPasswordSelected(true);
    }

    return (
        <div className="signUp">
            <div className="signUp__form">
                <SignUpHeader>De retour ? Content de te revoir !</SignUpHeader>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="form__elem">
                        <label htmlFor="email" className={isEmailSelected ? "form__elem--selected" : ""}>Email</label>
                        <input type="email" name="email" id="email" onClick={handleClickEmail}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="mdp" className={isPasswordSelected ? "form__elem--selected" : ""}>Mot de passe</label>
                        <input type="password" name="mdp" id="mdp" onClick={handleClickMdp}/>
                        <input type="submit" value="Connexion" className="form__elem--submit"/>
                    </div>
                </form>
            </div>
            <p className="signUp__text--sign">Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
    );
}

export default SignUp;