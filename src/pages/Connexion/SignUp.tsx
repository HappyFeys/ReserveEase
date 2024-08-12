import { Link, useNavigate } from "react-router-dom";
import SignUpHeader from "./../../component/features/SignUp/SignUpHeader";
import { useState } from "react";
import { userLogin } from "../../utils/Connexion/login.service";


function SignUp() {
    const [isEmailSelected, setIsEmailSelected] = useState(false);
    const [isPasswordSelected, setIsPasswordSelected] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        switch (e.target.name) {
            case "email":
                setFormData({
                    ...formData,
                    email: e.target.value
                })
                break;
            case "mdp":
                setFormData({
                    ...formData,
                    password: e.target.value
                })
                break;
            
            default: console.log("Form validation failed");
                break;
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userLogin(formData, navigate)
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
                        <input type="email" name="email" id="email" onClick={handleClickEmail} onChange={handleChange}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="mdp" className={isPasswordSelected ? "form__elem--selected" : ""}>Mot de passe</label>
                        <input type="password" name="mdp" id="mdp" onClick={handleClickMdp} onChange={handleChange}/>
                        <input type="submit" value="Connexion" className="form__elem--submit"/>
                    </div>
                </form>
            </div>
            <p className="signUp__text--sign">Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
    );
}

export default SignUp;