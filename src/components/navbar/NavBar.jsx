import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import logoImage from "../images/logoImage.png";
import { navbarBrand, navs } from "../../configs/config";
import { v4 as uuidv4 } from "uuid";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logoImage} alt="Logo" className="logo" />
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" onClick={handleNavClick}>
            {navs.map((navItem) => (
              <Nav.Link
                as={NavLink}
                to={navItem.page}
                key={uuidv4()}
                className="nav-item"
              >
                {navItem.nav}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="search-form" onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Explore news..."
              className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
