import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Navbar, Nav, Form, Container, NavDropdown } from "react-bootstrap";
import "antd/dist/antd.css";
import Banner from "../Banner";

Header.propTypes = {};

function Header(props) {
    const [navBackground, setNavBackground] = useState(false);
    const [searchForm, setSearchForm] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSearchForm = () => {
        return searchForm ? "search__form__click" : "";
    };

    const user = () => {
        return <i class="fa fa-user mx-3"></i>;
    };

    return (
        <>
            <div
                className="header"
                style={{ transition: "1s ease", backgroundColor: navBackground ? "#232323" : "transparent" }}
            >
                <Container fluid>
                    <Navbar expand="lg" variant="light">
                        <Navbar.Brand href="#home">
                            <img
                                src="./img/logo.svg"
                                style={{ position: "relative", bottom: "5px", right: "15px" }}
                                alt=""
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Categories" id="basic-nav-dropdown" className="dropdown--custom">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>

                                <NavLink to="/" className="nav-link nav-link-header">
                                    Trending
                                </NavLink>
                            </Nav>

                            <Form inline className={` ${handleSearchForm()} form__search flex-nowrap mx-4`}>
                                <i className="fa fa-search mr-2" onClick={() => setSearchForm(!searchForm)} />
                                <input type="text" placeholder="Search" className="form__search__custom pl-0" />
                            </Form>
                            <Nav>
                                {/* <NavLink to="/login" className="nav-link nav-link-header mr-3">
                                    Login
                                </NavLink> */}

                                <NavDropdown title={user()} id="basic-nav-dropdown" className="mr-5 d-flex">
                                    <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default Header;
