import React from 'react';
import "./companyInfo.scss"

function CompanyInfo(props) {
    return (
        <section  className="company-info-sec">
            <div  className="container">
                <div  className="about-left-right-sec">
                    <div  className="row">
                        <div  className="col-12 col-md-12 col-lg-6">
                            <div  className="tagline"><span >Our Core Values</span><h2
                                >Deliver Reliable &amp; Quality Software Development Services</h2></div>
                        </div>
                        <div  className="col-12 col-md-12 col-lg-6">
                            <div  className="culture-detail"><h3 >Optimum Client
                                Satisfaction</h3><p >It’s in our DNA. Our clients are the partners
                                behind the success we have tasted over the decades. This is the reason we keep client
                                satisfaction at the center of our ecosystem. We are not shy of collaboration to sharpen
                                our insights for perfect execution of our offerings. The praise from the clients is
                                music to our ears and we’d crave for that. It’s a hunger in us that never fades.
                            </p></div>
                            <div  className="culture-detail"><h3 >Result-oriented
                                Approach</h3><p >The roots of our success are connected to our vision
                                and execution of it. Starting from the recruitment to the quality deliverables, we keep
                                our values intact. We hire passionate humans who have that fire burning in them. People
                                who really want to work with us and understand the importance of client expectations to
                                deliver quality results.</p></div>
                            <div  className="culture-detail"><h3 >Integrity in
                                Everything</h3><p >Integrity is our core and is at the center of
                                everything we do. For us, it is as good as following the law, maybe more than that. It
                                is about delivering on our commitments, honesty and fairness in business and day-to-day
                                living. We are a family that believes in team work with one Mantra, that is to die with
                                memories, not dreams. Memories with our peeps, memories with our clients.</p></div>
                            <div  className="culture-detail"><h3 >Great Place to
                                Work</h3><p >There are a few things that make IndiaNIC a family. We love
                                our peeps. IndiaNIC is just not about its promises, global recognitions or testimonials.
                                With utter respect, we embrace the diversity of thought, cultures, and of people.
                                Nothing feels better than getting inspired by the mentors and their success stories.
                                Yes, IndiaNIC is compassionate for its priceless assets, the employees. Humans work
                                here, not robots!!
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyInfo;