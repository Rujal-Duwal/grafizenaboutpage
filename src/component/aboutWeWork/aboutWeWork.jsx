import React from 'react';
import "./aboutWeWork.scss"
import images from "../../static/images/play-btn-video.7931438a2edd6ea91aaf.svg"

function AboutWeWork(props) {
    return (
        <section  className="about-we-work-sec" style={{background: '#F8F8F8', padding: "100px 0"}}>
            <div  className="container">
                <div  className="row">
                    <div  className="col-12 col-md-12 col-lg-6">
                        <div  className="client-video-sec">
                            <img
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2018/12/kevin-giffhorn-1-video-thumb.jpg"
                            />
                                <div  className="video-button">
                                    <a
                                        className="video-btn-play-client fancybox-media"
                                        data-fancybox=""
                                        href="https://youtu.be/i2zvP67Rr1s">
                                        <img src={images} title="IndiaNIC Client"/>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div  className="col-12 col-md-12 col-lg-6">
                        <div  className="work-with-us"><p >Hear from those who worked
                            with us</p><h2 >We believe in building lasting relationships</h2>
                            <div ><p>We have connected with amazing clients to enable them with all that
                                the digital revolution has to offer. Seeing our clients passionate about their ideas
                                makes us want to deliver exceedingly successful mobile applications and websites. And
                                that’s what we strive to do everyday.</p>
                            </div>
                            <a  className="orange-btn" href="/we-work-with">We Work With</a></div>
                    </div>
                </div>
            </div>
        </section>
);
}

export default AboutWeWork;