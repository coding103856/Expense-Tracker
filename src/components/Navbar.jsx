import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">Expense Tracker</div>
      <ul className={`${isOpen ? 'open' : ''}  nav-links`}>
        <li>
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/track">Track Expenses</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;



/*
import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for programmatic navigation
    
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTrackExpenses = () => {
    navigate('/track'); // Navigate to '/track' route
  };

  return (
    <nav className="navbar">
      <div className="brand">Expense Tracker</div>
      <ul className={isOpen ? 'open' : ''}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/track" className="nav-link" onClick={handleTrackExpenses}>
            Track Expenses
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;


// export default Navbar;
// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="brand">Expense Tracker</div>
//       <ul className={isOpen ? "open" : ""}>
//         <li>
        //   <Link to="/Home">
        //     <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out">
        //       Home
        //     </button>
        //   </Link>
//         </li>
//         <li>
//           <Link to="/track">
//             <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out">
//               Track Expenses
//             </button>
//           </Link>
//         </li>
//       </ul>
//       <div className="hamburger" onClick={toggleMenu}>
//         ☰
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
*/