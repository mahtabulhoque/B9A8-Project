import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/listedBook'>Listed Books</NavLink></li>
     <li><NavLink to='/pages'>Pages to Read</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
              links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#131313] text-[30px] font-bold">Bookish</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn bg-[#23BE0A] border-none text-[#FFFFFF]">Button</a>
        <a className="btn bg-[#59C6D2] text-[#FFFFFF] ">Button</a>
      </div>
    </div>
  );
};

export default Navbar;