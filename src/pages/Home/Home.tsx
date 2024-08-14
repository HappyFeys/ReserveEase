import { useNavigate } from "react-router-dom";
import FilterHome from "../../component/features/Home/Filters/FilterHome";
import HeaderHome from "../../component/features/Home/Header/HeaderHome";
import Hero from "../../component/features/Home/Hero/Hero";
import PopularHome from "../../component/features/Home/Popular/PopularHome";
import NavBar from "../../component/layout/Navigation/NavBar";
import { getHome } from "../../utils/Home/home.service";

function Home() {

    const navigate = useNavigate()

    const homeData = getHome(navigate)
  

    return (
        <>
            <HeaderHome />
            <FilterHome />
            <Hero />
            <PopularHome />
            <NavBar />

            {/* <HeaderHome />
            <FilterHome filters={homeData}/>
            <Hero logements={homeData}/>
            <PopularHome logements={homeData} />
            <NavBar /> */}
        </>
    );
}

export default Home;