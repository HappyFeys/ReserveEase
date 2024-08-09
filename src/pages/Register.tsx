import { Link } from "react-router-dom";
import SignUpHeader from "../component/features/SignUp/SignUpHeader";
import Button from "../component/common/Button/Button";
import { useEffect, useState } from "react";

function Register() {

    const [isSelected, setIsSelected] = useState({
        email: false,
        firstname: false,
        lastname: false,
        phone: false,
        password: false,
        confirmpassword: false
    })

    const [defaulttype, setDefaultType] = useState("default")

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

    useEffect(()=>{
        const selectElement = document.querySelector('#type') as HTMLSelectElement

        const handleChange = () => {
            selectElement.value==="default" ? selectElement.classList.add("default") : selectElement.classList.remove("default");
        }

        selectElement.addEventListener('change', handleChange)

        return () => selectElement.removeEventListener('change', handleChange)
    }, [])

    return (
        <div className="signUp">
            <div className="signUp__form">
                <SignUpHeader>Bienvenue ! Crée ton nouveau compte.</SignUpHeader>
                <form action="" method="post">
                    <div className="form__elem">
                        <label htmlFor="email" className={isSelected.email ? "form__elem--selected" : ""}>Email</label>
                        <input type="email" name="email" id="email" onClick={handleClickEmail}/>
                    </div>
                    <div className="form__elem--double">
                        <div className="double">
                            <label htmlFor="firstName" className={isSelected.firstname ? "form__elem--selected" : ""}>Prénom</label>
                            <input type="text" name="firstName" id="firstName" onClick={handleClickFirstname}/>
                        </div>
                        <div className="double">
                            <label htmlFor="lastName" className={isSelected.lastname ? "form__elem--selected" : ""}>Nom</label>
                            <input type="text" name="lastName" id="lastName" onClick={handleClickLastname}/>
                        </div>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="phone" className={isSelected.phone ? "form__elem--selected" : ""}>Téléphone</label>
                        <input type="text" name="phone" id="phone" onClick={handleClickPhone}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="password" className={isSelected.password ? "form__elem--selected" : ""}>Mot de passe</label>
                        <input type="password" name="password" id="password" onClick={handleClickPassword}/>
                    </div>
                    <div className="form__elem">
                        <label htmlFor="confirmPassword" className={isSelected.confirmpassword ? "form__elem--selected" : ""}>Confirmer le mot de passe</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onClick={handleClickConfirmPassword}/>
                    </div>
                    <select name="type" id="type" className={`form__elem--select ${defaulttype === "default" ? "default" : ""}`} value={defaulttype} onChange={(e) => setDefaultType(e.target.value)}>
                        <option value="default" defaultChecked disabled>Vous êtes un ...</option>
                        <option value="client">Voyageur</option>
                        <option value="owner">Propriétaire</option>
                    </select>
                </form>

            </div>
            <div className="signUp__btn">
                <p className="signUp__text">Tu as déjà un compte ? <Link to="/signin">Connexion</Link></p>
                <Button textColors="white" bgColors="var(--CeladonBlue)">S'inscrire</Button>
            </div>
        </div>
    );
}

export default Register;