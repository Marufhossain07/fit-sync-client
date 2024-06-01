import AboutUs from "./about us/AboutUs";
import Banner from "./banner/Banner";

const Home = () => {
    return (
        <div className="container mx-auto mt-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;