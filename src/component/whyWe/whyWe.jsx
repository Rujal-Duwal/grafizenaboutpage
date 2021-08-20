import React from 'react';
import './whyWe.scss'

function WhyWe(props) {
    return (
        <section  className="why-we-sec" style={    {padding: '50px 0'}}>
            <div  className="container">
                <div  className="about-left-right-sec">
                    <div  className="row">
                        <div  className="col-md-6 col-lg-6">
                            <div  className="tagline"><span >Why we’re here?</span><h2
                                >What do we want to be remembered for?</h2></div>
                        </div>
                        <div  className="col-md-6 col-lg-6">
                            <div  className="culture-detail"><p>We came such a long way and so much has
                                happened in the past two decades. We built things, met so many people, created life long
                                friendships, learned so much and grew as a whole. Looking back, it was a bumpy ride.
                                Sometimes the days and months seemed endless and hopeless too. But the beautiful
                                destination is worth the struggle of the journey! And what a journey it turned out to
                                be!</p>
                                <p>Our definition of success changed a long time ago. Making a difference in a few lives
                                    is a worthy goal, but helping people to achieve the things they want to achieve is
                                    really what we want to be remembered for.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyWe;