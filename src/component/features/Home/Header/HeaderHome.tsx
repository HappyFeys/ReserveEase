import profileImg from "./../../../../../src/assets/img/unbgcommeunautre.jpg"
import searchIcon from "./../../../../../src/assets/icons/loupe.svg"
import { userLogout } from "../../../../utils/Connexion/logout.service";

function HeaderHome() {

    const handleDisconnect = () => {
        userLogout();
    }
   

    return (
        <header>
            <div className="header__container">
                <img src={profileImg} alt="Image de profil" className="header__img" />
                <div className="header__text">
                    {/* <p>Hello {firstName}</p> */}
                    <p className="header__name">Bonjour Dylan</p>
                    <p className="header__slogan">Où allons-nous aujourd'hui ?</p>
                </div>
            </div>
            <div className="header__search">
                <p onClick={handleDisconnect}>Déconnexion</p>
                <img src={searchIcon} alt="Icone de recherche" className="header__icon"/>
            </div>
        </header>
    );
}

export default HeaderHome;