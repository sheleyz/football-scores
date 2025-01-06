"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./branding.module.scss";

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => setCollapsed(!collapsed);

    return (
        <Navbar collapseOnSelect expand="sm" className={`${styles["bg-brand-secondary"]} ${styles["navbar"]} py-3`} data-bs-theme="dark" fixed="top">
            <Container className="px-3 px-md-5 mw-100">
                <Navbar.Brand href="/" className={`fw-semibold ${styles["text-brand-light"]} ${styles["navbar-brand"]}`}>Football Scores</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className={`${collapsed ? `${styles["collapsed"]}` : ``} ${styles["navbar-toggler"]} p-0`} onClick={handleClick}><FontAwesomeIcon icon={faBars} size="lg" /></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/teams" className={`${styles["nav-link"]}`}>Teams</Nav.Link>
                        <Nav.Link href="/compare" className={`${styles["nav-link"]}`}>Compare</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
