import { Link } from "react-router-dom";
import home from "./../../../../src/assets/icons/home.svg"
import booking from "./../../../../src/assets/icons/tickets.svg"
import discuss from "./../../../../src/assets/icons/message.svg"
import profile from "./../../../../src/assets/icons/profile.svg"

function NavBar() {
    return (
        <nav className="nav">
            <Link to={"/home"} className="home"><img src={home} alt="Home" />Home</Link>
            <Link to={"/booking"} className="booking"><img src={booking} alt="Booking" />Booking</Link>
            <Link to={"/discuss"} className="discuss"><img src={discuss} alt="Message" />Message</Link>
            <Link to={"/profile"} className="profile"><img src={profile} alt="Profil" />Profil</Link>
        </nav>
    );
}

export default NavBar;