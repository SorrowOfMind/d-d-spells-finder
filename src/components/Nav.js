import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import SearchBar from "./SearchBar";

const Nav = () => {
    return (
       <>
            <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
                <Col>
                    <Navbar.Brand href="#home">Dungeons & Dragons Spells</Navbar.Brand>
                </Col>
                <Col>
                    <SearchBar />
                </Col>
            </Navbar>
        </>
    )
}

export default Nav;
