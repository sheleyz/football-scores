"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <Navbar bg="brand-secondary" collapseOnSelect expand="sm" className="py-3" data-bs-theme="dark" fixed="top">
            <Container className="px-3 px-md-5 mw-100">
                <Navbar.Brand href="/" className="fw-semibold text-brand-light">Football Scores</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="p-0"><FontAwesomeIcon icon={faBars} size="lg" /></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/teams">Teams</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
