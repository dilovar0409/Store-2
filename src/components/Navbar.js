import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logoBtn">
                    <img src={Logo} alt="Logo" />
                    <p><span>C</span>lothes</p>
                    <div className="shopping-icon mobile-shopping">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <span>0</span>
                    </div>
                    <div className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="links">
                        {/*navbar menu*/}
                        <div className="links-navigation">
                            <div className="nav-btn">
                                <span>X</span>
                            </div>
                            <ul className="links-nav">
                                {/* <li><Link to="me">Home</Link></li> */}
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


// const Icon = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/me"/>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

