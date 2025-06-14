import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { CgProfile } from "react-icons/cg";

const Header = () => {
 const {userSignOut, user}= useContext(AuthContext)

 const handleSignOut = () => {
  userSignOut()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
 }

  const links = (
    <>
      <li>
        <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/'>Home</NavLink>
       
      </li>
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/addCoffees'>Add Coffee</NavLink>
        
      </li>
      {
      user && 
      <>
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/allCoffees'>All Coffee's</NavLink>
        
      </li>
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/myAddedCoffees'>My Added Coffee's</NavLink>
        
      </li>
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/myOrders'>My orders</NavLink>
        
      </li>
      </>
      }
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/users'>Users</NavLink>
      </li>
      {user ? '' : <> <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/signUp'>SignUp</NavLink>
        
      </li>
      <li>
         <NavLink className={({isActive})=> isActive ? 'text-primary underline' : ''} to='/signIn'>SignIn</NavLink>
      </li>
      </>}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Espresso Emporium</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user? <img className="w-12 h-12 rounded-full mr-2 object-cover" src={user?.photoURL} alt="" /> : <CgProfile size={35} />}
        {user && <button onClick={handleSignOut} className="btn">Sign Out</button> }
      </div>
    </div>
  );
};

export default Header;
