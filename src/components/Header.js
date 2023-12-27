"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
    return (
        <Navbar bg="brand-secondary" collapseOnSelect expand="md" className="py-3" data-bs-theme="dark" fixed="top">
            <Container className="px-4 px-md-5 mw-100">
                <Navbar.Brand href="/" className="fw-semibold text-brand-light">NFL Teams App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};
