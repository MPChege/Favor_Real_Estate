import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();

  const showMenu = () => {
    menuRef.current.classList.toggle("hidden");
  };

  return (
    <div className="navbar-container">
      <nav className="md:py-6 py-4 px-4">
        <div className="navbar md:flex justify-around items-center bg-navy-blue">
          <div className="flex items-center justify-between">
            <Link to="/" className="md:text-3xl text-2xl uppercase font-semibold text-white">
              Vibes Properties
            </Link>
            <button onClick={showMenu} className="md:hidden">
              <i className="text-xl fa fa-bars"></i>
              {/* <i className="fa fa-times"></i> */}
            </button>
          </div>

          <div ref={menuRef} className="md:flex hidden">
            <ul className="md:flex items-center md:text-lg font-medium">
              <li className="md:mx-8 md:my-0 my-2">
                <Link to="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li className="md:mx-8 md:my-0 my-2">
                <Link to="/buy" className="hover:text-gray-100">
                  Buy
                </Link>
              </li>
              <li className="md:mx-8 md:my-0 my-2">
                <Link to="/sell" className="hover:text-gray-100">
                  Sell
                </Link>
              </li>
              <li className="md:mx-8 md:my-0 my-2">
                <Link to="/contact" className="hover:text-gray-100">
                  Contact
                </Link>
              </li>                         
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
