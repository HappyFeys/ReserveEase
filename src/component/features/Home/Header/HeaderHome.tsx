import profileImg from "./../../../../../src/assets/img/unbgcommeunautre.jpg"
import searchIcon from "./../../../../../src/assets/icons/loupe.svg"

function HeaderHome() {

   

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
            <img src={searchIcon} alt="Icone de recherche" className="header__icon"/>
        </header>
    );
}

export default HeaderHome;