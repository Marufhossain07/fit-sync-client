import { Avatar,Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";

const FlowbiteNavbarbar = () => {
    const user = false
    const links = <>
        <NavLink to='/'><FlowbiteNavbar.Link className="text-base font-inter">Home</FlowbiteNavbar.Link></NavLink>
        <NavLink to='/all-trainer'><FlowbiteNavbar.Link className="text-base font-inter">All Trainer </FlowbiteNavbar.Link></NavLink>
        <NavLink to='/all-classes'><FlowbiteNavbar.Link className="text-base font-inter" >All Classes</FlowbiteNavbar.Link></NavLink>
        {
            user && <NavLink to='/dashboard'><FlowbiteNavbar.Link className="text-base font-inter"> Dashboard</FlowbiteNavbar.Link></NavLink>
        }
        <NavLink to='/community'><FlowbiteNavbar.Link className="text-base font-inter"> Community</FlowbiteNavbar.Link></NavLink>
    </>
    return (
        <div className="container mx-auto mt-5">
            <FlowbiteNavbar fluid rounded className="p-0">
                <FlowbiteNavbar.Toggle />
                <FlowbiteNavbar.Brand>
                    <h3 className="self-center whitespace-nowrap text-3xl md:text-3xl lg:text-4xl text-[#003049] font-bold font-sedan dark:text-white">Fit<span className="text-[#d62828]">Sync</span></h3>
                </FlowbiteNavbar.Brand>
                <div className="flex md:order-2">
                    {
                        user? <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Log Out</Dropdown.Item>
                    </Dropdown> : <Link to='/login'><Button text={'Login'}></Button></Link>
                    }
                    
                    
                </div>
                <FlowbiteNavbar.Collapse id="nav">
                    {links}
                </FlowbiteNavbar.Collapse>
                
            </FlowbiteNavbar>
        </div>
    );
};

export default FlowbiteNavbarbar;