import FilterHome from "../../component/features/Home/Filters/FilterHome";
import HeaderHome from "../../component/features/Home/Header/HeaderHome";
import Hero from "../../component/features/Home/Hero/Hero";
import PopularHome from "../../component/features/Home/Popular/PopularHome";
import NavBar from "../../component/layout/Navigation/NavBar";

function Home() {
    return (
        <>
            <HeaderHome />
            <FilterHome />
            <Hero />
            <PopularHome />
            <NavBar />
        </>
    );
}

export default Home;