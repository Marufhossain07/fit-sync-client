
import { useState } from "react";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    return (
        <div className="flex  justify-between">
            <div className="w-0 lg:w-72">
                <button
                    title="Side navigation"
                    type="button"
                    className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${isSideNavOpen
                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                        : ""
                        }`}
                    aria-haspopup="menu"
                    aria-label="Side navigation"
                    aria-expanded={isSideNavOpen ? " true" : "false"}
                    aria-controls="nav-menu-1"
                    onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                >
                    <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
                        ></span>
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                        ></span>
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                        ></span>
                    </div>
                </button>

                {/*  <!-- Side Navigation --> */}
                <aside
                    id="nav-menu-1"
                    aria-label="Side navigation"
                    className={`fixed top-0 bottom-0 left-0 z-40 flex  w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                        }`}
                >
                     <h3 className="self-center whitespace-nowrap text-3xl md:text-3xl lg:text-4xl text-[#003049] font-bold my-5 font-sedan dark:text-white">Fit<span className="text-[#d62828]">Sync</span></h3>
                     <hr className="mb-5"/>
                    <nav
                        aria-label="side navigation"
                        className="flex-1 divide-y divide-slate-100 overflow-auto"
                    >
                        <div>
                            <ul className="flex flex-1 flex-col gap-1 py-3">
                                <li className="px-3">
                                    <NavLink to='/dashboard/subscribers'>
                                    <a
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-400 focus:bg-red-400 focus:text-white hover:text-white aria-[current=page]:bg-red-400  aria-[current=page]:text-red-400 "
                                    >
                                        <div className="flex items-center self-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                aria-label="Dashboard icon"
                                                role="graphics-symbol"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            All SubScribers
                                        </div>
                                    </a>
                                    </NavLink>
                                </li>
                                <li className="px-3">
                                    <NavLink to='/dashboard/add-class'>
                                    <a
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-400 focus:bg-red-400 focus:text-white hover:text-white aria-[current=page]:bg-red-400  aria-[current=page]:text-red-400 "
                                    >
                                        <div className="flex items-center self-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                aria-label="Dashboard icon"
                                                role="graphics-symbol"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Add New Class
                                        </div>
                                    </a>
                                    </NavLink>
                                </li>
                                <li className="px-3">
                                    <NavLink to='/dashboard/subscribers'>
                                    <a
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-400 focus:bg-red-400 focus:text-white hover:text-white aria-[current=page]:bg-red-400  aria-[current=page]:text-red-400 "
                                    >
                                        <div className="flex items-center self-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                aria-label="Dashboard icon"
                                                role="graphics-symbol"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            All SubScribers
                                        </div>
                                    </a>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-1 flex-col gap-1 py-3">
                                <li className="px-3">
                                    <a
                                        href="#"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-400 focus:bg-red-400 focus:text-white hover:text-white aria-[current=page]:bg-red-400  aria-[current=page]:text-red-400 "
                                    >
                                        <div className="flex items-center self-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                aria-label="Dashboard icon"
                                                role="graphics-symbol"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            All SubScribers
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </nav>
                </aside>

                {/*  <!-- Backdrop --> */}
                <div
                    className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
                        }`}
                    onClick={() => setIsSideNavOpen(false)}
                ></div>
            </div>
            <div className="flex-1 min-h-screen">
            <Outlet></Outlet>
            </div>
        </div>
        
    );
};

export default Dashboard;
