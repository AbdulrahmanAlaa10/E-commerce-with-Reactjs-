import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from 'react-icons/fa';

function NavBar({totalItems}) {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar light className="navvvv" expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto navyy" navbar>
                        <div>
                            <NavItem>
                                <NavLink className="navlinkk" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="navlinkk" to="/Shop">Shop</NavLink>
                            </NavItem>
                        </div>
                        <div>
                            <img className="imglogo" src="images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png" alt="" />
                        </div>
                        <div>
                            <NavItem>
                                <NavLink className="cartLink" to="/Cart">
                                    <span>
                                    {totalItems}
                                    </span>
                                    <FaShoppingBasket className='iconnm'/>
                                </NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar