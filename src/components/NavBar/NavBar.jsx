import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    
    // const handleLogOut = () =>{
    //     logOut()
    //     .then(() => console.log('user logged out successfully'))
    //     .catch(error => console.error (error))
    // }

    const handleLogOut = () => {
        logOut()
            .then(() => 
                console.log('Log out user')
            )
            .catch(error => 
                console.log(error)
            )
    }
    const navLink = <div className="flex space-x-4 font-bold text-xl">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'> Log-In</NavLink>
        <NavLink to='/register'>Sign up</NavLink>
        <NavLink to='/orders'>All Orders</NavLink>
    </div>


        return (
            <div className="navbar bg-blue-300 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 mx-5 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Jony</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mx-5 px-1">

                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <span>{user.email}</span>
                    }
                    <a onClick={handleLogOut} className="btn">Sign out</a>
                </div>
            </div>
        );
    };

    export default NavBar;