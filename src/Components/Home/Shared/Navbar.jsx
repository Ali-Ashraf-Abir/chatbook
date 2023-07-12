import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {user,auth,setUser,setCurrentUser}=useContext(AuthContext)

    const navigate=useNavigate()

    const handleLogout=()=>{

        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
            setCurrentUser(null)
          }).catch((error) => {
            // An error happened.
          });
          
    }

    if(!user){
        navigate('/')
    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" text-[3vh] font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>NewsFeed</a></li>
        <li><a>Friends</a></li>
        <li><a>Chat</a></li>
        <li><a href="">My Profile</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">ChatBook</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 text-[3vh] font-bold">
      <li><a>NewsFeed</a></li>
      <li><a>Friends</a></li>
      <li><a>Chat</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a onClick={handleLogout} className="btn">{user?'Logout':''}</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;