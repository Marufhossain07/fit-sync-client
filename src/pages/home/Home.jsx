import { Helmet } from "react-helmet-async";
import AboutUs from "./about us/AboutUs";
import Banner from "./banner/Banner";
import Featured from "./Featured/Featured"
import Newsletter from "./newsletter/Newsletter";

const Home = () => {
    return (
        <div className="container mx-auto mt-10">
            <Helmet>
                <title>FitSync | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;