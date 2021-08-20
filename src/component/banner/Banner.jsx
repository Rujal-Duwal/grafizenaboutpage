import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./banner.css"

function Banner(props) {
    return (
        <div className={"main-page-header"}>
            <Container className={"page-header-container"} >
            <div className={"page-header-content "} style={{padding: '0 8%'}}>
                <Row >
                    <Col><p>Award-winning Offshore Software Development Company Since 1997</p></Col>
                </Row>
                <Row>
                    <Col> <h1>Our Treasure Comprises Our People, Vision & Values</h1></Col>
                </Row>
                <Row>
                    <Col>  <p>
                        IndiaNIC is not only a globally recognized IT company but also a family filled with talented experts
                        that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
                    </p></Col>
                </Row>
            </div>
            </Container>
        </div>
    );
}

export default Banner;