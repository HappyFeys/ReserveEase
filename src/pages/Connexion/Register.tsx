import { Link } from "react-router-dom";
import SignUpHeader from "./../../component/features/SignUp/SignUpHeader";
import Button from "../../component/common/Button/Button";
import {  useState, useRef } from "react";
import { createUser } from "../../utils/Connexion/register.service";

function Register() {
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        password: ""
    })

    const [passWordRepeat, setPassWordRepeat] = useState("");

    const [isSelected, setIsSelected] = useState({
        email: false,
        firstname: false,
        lastname: false,
        phone: false,
        password: false,
        confirmpassword: false
    })

    const formRef = useRef<HTMLFormElement>(null);

    const handleClickEmail = () => {
        setIsSelected({
            ...isSelected,
            email: true
        })
    }

    const handleClickFirstname = () => {
        setIsSelected({
            ...isSelected,
            firstname: true
        })
    }

    const handleClickLastname = () => {
        setIsSelected({
            ...isSelected,
            lastname: true
        })
    }

    const handleClickPhone = () => {
        setIsSelected({
            ...isSelected,
            phone: true
        })
    }

    const handleClickPassword = () => {
        setIsSelected({
            ...isSelected,
            password: true
        })
    }

    const handleClickConfirmPassword = () => {
        setIsSelected({
            ...isSelected,
            confirmpassword: true
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("je submit mon formulaire");
        createUser(formData, passWordRepeat)
    }

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
            case "firstName":
                setFormData({
                    ...formData,
                    firstname: e.target.value
                })
                break;
            case "lastName":
                setFormData({
                    ...formData,
                    lastname: e.target.value
                })
                break;
            case "phone":
                setFormData({
                    ...formData,
                    phonenumber: e.target.value
                })
                break;
            case "password":
                setFormData({
                    ...formData,
                    password: e.target.value
                })
                break;
            
            default: setPassWordRepeat(e.target.value)
                break;
        }
    }

    return (
        <div className="signUp">
            <div className="signUp__form">
                <SignUpHeader>Bienvenue ! Crée ton nouveau compte.</SignUpHeader>
                <form method="post" onSubmit={handleSubmit} ref={formRef}>
                    <div className="form__elem">
                        <label htmlFor="email" className={isSelected.email ? "form__elem--selected" : ""}>Email</label>
                        <input type="email" name="email" id="email" onClick={handleClickEmail} onChange={handleChange}/>
                    </div>
                    <div className="form__elem--double">
                        <div className="double">
                            <label htmlFor="firstName" className={isSelected.firstname ? "form__elem--selected" : ""}>Prénom</label>
                            <input type="text" name="firstName" id="firstName" onClick={handleClickFirstname} onChange={handleChange}/>
                        </div>
                        <div className="double">
                            <label htmlFor="lastName" className={isSelected.lastname ? "form__elem--selected" : ""}>Nom</label>
                            <input type="text" name="lastName" id="lastName" onClick={handleClickLastname} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="phone" className={isSelected.phone ? "form__elem--selected" : ""}>Téléphone</label>
                        <input type="phone" name="phone" id="phone" onClick={handleClickPhone} onChange={handleChange}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="password" className={isSelected.password ? "form__elem--selected" : ""}>Mot de passe</label>
                        <input type="password" name="password" id="password" onClick={handleClickPassword} onChange={handleChange}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="confirmPassword" className={isSelected.confirmpassword ? "form__elem--selected" : ""}>Confirmer le mot de passe</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onClick={handleClickConfirmPassword} onChange={handleChange}/>
                    </div>
                    <input type="submit" value="S'inscrire" />
                </form>

            </div>
            <div className="signUp__btn">
                <p className="signUp__text">Tu as déjà un compte ? <Link to="/signin">Connexion</Link></p>
                <Button textColors="white" bgColors="var(--CeladonBlue)" onClick={() => formRef.current?.submit()}>S'inscrire</Button>
            </div>
        </div>
    );
}

export default Register;