import { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { loggedIn, role, userId } = useContext(AuthContext);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Buddy Care</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        {loggedIn === true && role === 'patient' && (
                        <>
                        <NavItem>
                                <div>
                                    <Link
                                        to="/home"
                                        style={{ color: 'transparent' }}>
                                        <NavLink href="">Home</NavLink>
                                    </Link>
                                </div>
                            </NavItem><NavItem>
                                    <div>
                                        <Link
                                            to="/diary"
                                            style={{ color: 'transparent' }}>
                                            <NavLink href="">Diario</NavLink>
                                        </Link>
                                    </div>
                                </NavItem>
                        </>
                        )}
                        {loggedIn === true && role === 'psychologist' && (
                        <>
                        <NavItem>
                                    <div>
                                        <Link
                                            to={`/psychologist/${userId}/patients`} style={{ color: 'transparent' }}>
                                            <NavLink href="">Pacientes</NavLink>
                                        </Link>
                                    </div>
                                </NavItem>
                        </>
                        )}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Ajuda
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;