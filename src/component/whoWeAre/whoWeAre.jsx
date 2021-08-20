import React from 'react';
import {Container, Row} from "react-bootstrap";
import "./whoWeAre.css"

function WhoWeAre(props) {
    return (
        <section className="aboutus-des-sec sec-pad-50" style={    {padding: '50px 0'}}>
            <Container>
                <Row >
                    <div className="col-12 col-md-12 col-lg-6 mar-top-40">
                        <h2 style={{marginBottom: '30px'}}>Who We Are</h2>
                        <div>
                            <p>IndiaNIC is not an entity, it’s a family that represents togetherness
                                for over two decades of a successful journey. For IndiaNICians, the definition of success is
                                to transcend innovative ideas of people to reality with the help of our tech expertise, this
                                is what we, as a Team, want to be remembered for!
                            </p>
                            <p>Our vision has led IndiaNIC to become a top IT company in India &amp; USA for delivering
                                various industry-led mobility solutions. The goal is to empower clients and businesses
                                by creating new possibilities leveraging the technologies of today and tomorrow with the
                                utmost quality, satisfaction, and transparency.
                            </p>
                        </div>
                    </div>
                    <div _ngcontent-c3="" className="col-12 col-md-12 col-lg-6 mar-top-40">
                        <h2 style={{marginBottom: '30px'}}>What We Do</h2>
                        <div _ngcontent-c3="">
                            <p>
                                Our enthusiasm has led us to become a top IT company in India &amp; USA
                                for delivering various industry-led mobility solutions in web and mobile application
                                development domains leveraging futuristic technologies like Internet of Things (IoT), AI-ML,
                                AR-VR, Voice assistants and Voice Skills, DevOps &amp; Cloud computing, etc.</p>
                            <p>We feel empowered with our certified tech experts and our R&amp;D team who have always
                                challenged themselves to help global clientele with a plethora of IT services and
                                solutions. Engagement with our team guarantees our clients to save huge money on project
                                development with faster delivery.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default WhoWeAre;