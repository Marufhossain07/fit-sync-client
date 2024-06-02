
import { Footer as FlowBitefooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <FlowBitefooter className="p-0" container>
            <div className="container bg-black mx-auto p-10 rounded-lg">
                <div className="grid w-full">
                    <div>
                        <h3 className="self-center whitespace-nowrap text-3xl mb-5 md:text-3xl lg:text-5xl text-white font-bold font-sedan dark:text-white">Fit<span className="text-[#d62828]">Sync</span></h3>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FlowBitefooter.Title className="text-white text-lg" title="Pages" />
                            <FlowBitefooter.LinkGroup col>
                                <FlowBitefooter.Link className="text-white" href="/">Home</FlowBitefooter.Link>
                                <FlowBitefooter.Link className="text-white" href="/all-classes">All Classes</FlowBitefooter.Link>
                                <FlowBitefooter.Link className="text-white" href="/all-trainers">All Trainers</FlowBitefooter.Link>
                                <FlowBitefooter.Link className="text-white" href="/community">Community</FlowBitefooter.Link>
                            </FlowBitefooter.LinkGroup>
                        </div>
                        <div>
                            <FlowBitefooter.Title className="text-white text-lg" title="Address" />
                            <FlowBitefooter.LinkGroup col>
                            <FlowBitefooter.Link  className="text-white"><span className="flex items-center gap-1"><FaHome /> 10/A , Mirpur , Dhaka, Bangladesh</span></FlowBitefooter.Link>
                            </FlowBitefooter.LinkGroup>
                        </div>
                        <div>
                            <FlowBitefooter.Title className="text-white text-lg" title="Contact Us" />
                            <FlowBitefooter.LinkGroup col>
                                
                                <FlowBitefooter.Link className="text-white"><span className="flex items-center gap-1"><IoCall />+8801872941205</span></FlowBitefooter.Link>
                                <FlowBitefooter.Link  className="text-white"><span className="flex items-center gap-1"><MdEmail /> marufprogrammer07@gmail.com </span></FlowBitefooter.Link>
                            </FlowBitefooter.LinkGroup>
                        </div>
                    </div>
                </div>
                <FlowBitefooter.Divider className="border border-red-500"/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FlowBitefooter.Copyright className="text-white" href="#" by="FitSync. All rights reserved." year={2026} />
                    <div className="mt-4 flex space-x-6  sm:mt-0 sm:justify-center">
                        <FlowBitefooter.Icon className="text-white" href="#" icon={BsInstagram} />
                        <FlowBitefooter.Icon className="text-white" href="#" icon={BsTwitter} />
                        <FlowBitefooter.Icon className="text-white" href="#" icon={BsGithub} />
                        <FlowBitefooter.Icon className="text-white" href="#" icon={BsFacebook} />
                        <FlowBitefooter.Icon className="text-white" href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </FlowBitefooter>
    );
}

export default Footer;