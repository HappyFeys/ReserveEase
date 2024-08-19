import { useNavigate } from "react-router-dom";
import FilterHome from "../../component/features/Home/Filters/FilterHome";
import HeaderHome from "../../component/features/Home/Header/HeaderHome";
import Hero from "../../component/features/Home/Hero/Hero";
import PopularHome from "../../component/features/Home/Popular/PopularHome";
import NavBar from "../../component/layout/Navigation/NavBar";
import { getHome } from "../../utils/Home/home.service";
import { useEffect, useState } from "react";
import { ApiResponse } from "../../types/home.type";

function Home() {

    const [homeData, setHomeData] = useState<ApiResponse | null>(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHome(navigate);
            setHomeData(data);
        };

        fetchData();
    }, [navigate]);

    if (!homeData) {
        return <div>Loading...</div>;
    }

    console.log(homeData.filter.localisation);

    return (
        <>
            <HeaderHome />
            <FilterHome filters={homeData.filter}/>
            <Hero logements={homeData.logementList}/>
            <PopularHome logements={homeData.logementRecomanded} />
            <NavBar />
        </>
    );
}

export default Home;