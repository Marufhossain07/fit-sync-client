import Heading from "../../../components/heading/Heading";
import about from "../../../assets/about2.jfif"
import { FaDumbbell } from "react-icons/fa";
import { IoAccessibilitySharp } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

const AboutUs = () => {
    return (
        <div className="mt-10">
            <Heading title={'30 Years of Experience in Fitness'} sub={'About Us'}></Heading>
            <div className="flex flex-col gap-10 mx-auto pt-5 lg:flex-col xl:flex-row lg:justify-between">
                <div className="">
                    <h1 className="text-2xl mb-5 font-inter font-bold">Welcome to FitSync, your ultimate destination for achieving your fitness goals. Our mission is to empower individuals through personalized training, innovative classes, and a supportive community.FitSync was created out of a passion for fitness and a desire to build an inclusive space for everyone.
                    </h1>

                    <p className="font-inter text-lg">
                        At FitSync, we offer state-of-the-art equipment, a variety of group classes, and personalized training programs tailored to meet the needs of each member. Our team of certified trainers and wellness experts is dedicated to providing the guidance and support you need to reach your full potential.

                        We pride ourselves on fostering a welcoming and motivating environment where everyone can thrive. Join our community and start your journey towards a healthier, stronger you with FitSync.
                    </p>

                    <div className="flex flex-col md:flex-row lg:flex-row justify-around gap-5 mt-10 mb-5">
                        <div className="p-10 border-2 flex flex-col items-center border-red-600">
                        <FaDumbbell  className="text-3xl"/>
                        <p className="font-inter uppercase font-semibold text-lg text-red-600">Gym Fitness</p>
                        </div>
                        <div className="p-10 border-2 flex flex-col items-center border-red-600">
                        <IoAccessibilitySharp className="text-3xl" />
                        <p className="font-inter uppercase font-semibold text-lg text-red-600">Body Shaping</p>
                        </div>
                        <div className="p-10 border-2 flex flex-col items-center border-red-600">
                        <GrYoga className="text-3xl" />
                        <p className="font-inter uppercase font-semibold text-lg text-red-600">Yoga Classes</p>
                        </div>
                    </div>

                    <Link to='/all-classes'><Button text={'Join Today'}></Button></Link>

                </div>
                <img src={about} alt="" className="rounded-lg object-cover lg:h-full " />
            </div>
        </div>
    );
};

export default AboutUs;