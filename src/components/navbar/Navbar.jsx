import {Button, Navbar as FlowbiteNavbar} from "flowbite-react";
import { Link } from "react-router-dom";

const FlowbiteNavbarbar = () => {
    const links = <>
    <Link to='/'><FlowbiteNavbar.Link>Home</FlowbiteNavbar.Link></Link>
    <Link to='/all-trainer'><FlowbiteNavbar.Link>All Trainer </FlowbiteNavbar.Link></Link>
    <Link to='/all-classes'><FlowbiteNavbar.Link>All Classes</FlowbiteNavbar.Link></Link>
    <Link to='/dashboard'><FlowbiteNavbar.Link> Dashboard</FlowbiteNavbar.Link></Link>
    <Link to='/community'><FlowbiteNavbar.Link> Community</FlowbiteNavbar.Link></Link>
    </>
    return (
        <div>
            <FlowbiteNavbar fluid rounded>
                <FlowbiteNavbar.Brand href="https://flowbite-react.com">
                    <h3 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FitSync</h3>
                </FlowbiteNavbar.Brand>
                <div className="flex md:order-2">
                    <Link to='/login'><Button>Login</Button></Link>
                    <FlowbiteNavbar.Toggle />
                </div>
                <FlowbiteNavbar.Collapse>
        {links}
                </FlowbiteNavbar.Collapse>
            </FlowbiteNavbar>
        </div>
    );
};

export default FlowbiteNavbarbar;