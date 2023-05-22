import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";


const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Container>
                    <header>
                        <Navbar expand="sm">
                            <Navbar.Toggle aria-controls="mainNav" />
                            <Navbar.Collapse id="mainNav" className="justify-content-end"></Navbar.Collapse>
                            <Nav>
                                <Nav.Item>Home</Nav.Item>
                            </Nav>
                        </Navbar>
                    </header>
                </Container>
            </div>
            <main>
                {children}
            </main>
            <div className="layout">
                <Container>
                    <footer id="mainFooter" className="pageFooter">
                        <Row className="justify-content-center">
                            <Col>
                                <span>footer goes here</span>
                            </Col>
                        </Row>
                    </footer>
                </Container>
            </div>
        </>
    )
}


export default Layout