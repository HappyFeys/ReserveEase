import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../utils/Connexion/logout.service";
import photo from "./../../../src/assets/img/unbgcommeunautre.jpg"
import edit from "./../../../src/assets/icons/edit.svg"
import favorite from "./../../../src/assets/icons/favouriteProfil.svg"
import accountSetting from "./../../../src/assets/icons/parameters.svg"
import NavBar from "../../component/layout/Navigation/NavBar";
import Back from "../../component/common/Button/Back";
import add from "./../../../src/assets/icons/add.svg";
import house from "./../../../src/assets/icons/house.svg";


function Profile() {

    const mesLogements = [{
        id: 1,}] //a retirer quand j'aurai le get

    const navigate = useNavigate()
    const handleDisconnect = () => {
        userLogout(navigate);
    }



    return (
        <div className="profile">
            <div className="profile__header">
                <Back />
                <h1>Profil</h1>
                <p onClick={handleDisconnect}>Déconnexion</p>
            </div>
            <div className="profile__person">
                <img src={photo} alt="Image de profil" />
                <h2>Dylan Feys</h2>
                <p>happyfeys@outlook.com</p>
            </div>
            <Link to="/profile/edit"><div className="profile__edit"><img src={edit} alt="edit" /><p>Modifier son profil</p></div></Link>
            <Link to="/profile/favorite"><div className="profile__edit"><img src={favorite} alt="favorite" /><p>Vos favoris</p></div></Link>
            <Link to="/profile/edit"><div className="profile__edit"><img src={accountSetting} alt="accountSetting" /><p>Modifier son compte</p></div></Link>
            <Link to="/profile/logement"><div className="profile__edit"><img src={add} alt="Add a logement" /><p>Ajouter un logement</p></div></Link>
            <Link to="/profile/mesLogements"><div className="profile__edit" style={mesLogements.length>0? {}: {display: "none"}}><img src={house} alt="Your logement" /><p>Mes logements</p></div></Link>
            <NavBar />
        </div>
    );
}

export default Profile;