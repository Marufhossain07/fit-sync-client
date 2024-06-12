import { Avatar, Dropdown, Navbar as FlowbiteNavbar, Spinner } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useTrainer from "../../hooks/useTrainer";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin()
    const [isTrainer ,isTrainerLoading] = useTrainer()
    const links = <>
        <NavLink to='/'><FlowbiteNavbar.Link className="text-base font-inter">Home</FlowbiteNavbar.Link></NavLink>
        <NavLink to='/all-trainers'><FlowbiteNavbar.Link className="text-base font-inter">All Trainer </FlowbiteNavbar.Link></NavLink>
        <NavLink to='/all-classes'><FlowbiteNavbar.Link className="text-base font-inter" >All Classes</FlowbiteNavbar.Link></NavLink>
        
        {
            user && isAdmin && <NavLink to='/dashboard/subscribers'><FlowbiteNavbar.Link className="text-base font-inter"> Dashboard</FlowbiteNavbar.Link></NavLink>
        }
        {
            user && isTrainer && <NavLink to='/dashboard/manage-slots'><FlowbiteNavbar.Link className="text-base font-inter"> Dashboard</FlowbiteNavbar.Link></NavLink>
        }
        {
            user && !isAdmin && !isTrainer && <NavLink to='/dashboard/activity'><FlowbiteNavbar.Link className="text-base font-inter"> Dashboard</FlowbiteNavbar.Link></NavLink>
        }
        <NavLink to='/community'><FlowbiteNavbar.Link className="text-base font-inter"> Community</FlowbiteNavbar.Link></NavLink>
    </>
    // if (isAdminLoading || isTrainerLoading) {
    //     return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    // }
    return (
        <div className="container mx-auto mt-5">
            <FlowbiteNavbar fluid rounded className="p-0">
                <FlowbiteNavbar.Toggle />
                <FlowbiteNavbar.Brand>
                    <h3 className="self-center whitespace-nowrap text-3xl md:text-3xl lg:text-4xl text-[#003049] font-bold font-sedan dark:text-white">Fit<span className="text-[#d62828]">Sync</span></h3>
                </FlowbiteNavbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" className="border-2 p-[3px] border-red-600 rounded-full" img={user?.photoURL} rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block font-semibold text-sm">{user?.displayName}</span>
                            </Dropdown.Header>
                            <Dropdown.Item><button onClick={logOut} className='border px-4 py-3 rounded-lg hover:opacity-50 bg-black border-red-600 text-white text-lg font-medium'>
                                Logout
                            </button></Dropdown.Item>
                        </Dropdown> : <Link to='/login'><button className='border px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium'>
                            Login
                        </button></Link>
                    }


                </div>
                <FlowbiteNavbar.Collapse id="nav">
                    {links}
                </FlowbiteNavbar.Collapse>

            </FlowbiteNavbar>
        </div>
    );
};

export default Navbar;