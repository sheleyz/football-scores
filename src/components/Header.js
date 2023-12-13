import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <Navbar bg="brand-secondary" collapseOnSelect expand="md" className="py-3" data-bs-theme="dark" fixed="top">
            <Container className="px-4 px-md-5 mw-100">
                <Navbar.Brand href="/" className="fw-semibold text-brand-light">NFL Teams App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="p-0"><FontAwesomeIcon icon={faBars} size="xl" fixedWidth /></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="my-2 my-md-0">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
