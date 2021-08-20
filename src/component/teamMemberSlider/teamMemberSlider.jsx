import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaLinkedinIn} from 'react-icons/fa'

import 'swiper/swiper.scss';
import './teamMemberSlider.scss'
import 'swiper/swiper-bundle.css';

function TeamMemberSlider(props) {
// install Swiper modules
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const width=window.innerWidth

    const slideView=()=>width>500?3:1

    console.log(slideView)
    return (
        <div>
            <section  className="team-member-slider" style={{background: '#F8F8F8',padding: "100px 0"}}>
                <div  className="container"><h2 >Our Leaders</h2>
                    <div  className="team-grid-slider about-mr-top-70">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={slideView()}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            params={{loop:true}}

                        >
                            <SwiperSlide>
                                <div  className="slide slick-slide slick-current slick-active"
                                      data-slick-index="0" aria-hidden="false" style={{width: 380}} tabIndex="-1"
                                      role="option" aria-describedby="slick-slide00">
                                    <div  className="team-photos-sec">
                                        <div  className="img-box">
                                            <img
                                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-team-sandeep-mundra.jpg"
                                                alt="Sandeep Mundra"/>
                                        </div>
                                        <div  className="member-detail"><h6 >Sandeep
                                            Mundra</h6><p >CEO &amp; Founder</p>
                                            <div  className="member-social-links">
                                                <a
                                                    target="_blank"
                                                    href="https://www.linkedin.com/in/sandeepmundra/"
                                                    tabIndex="0">
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-linkedin">
                                                    <FaLinkedinIn/>
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="slide slick-slide slick-active"
                                    data-slick-index="1"
                                    aria-hidden="false"
                                    style={{width: "380px"}}
                                    tabIndex="-1" role="option"
                                    aria-describedby="slick-slide01"
                                >
                                    <div  className="team-photos-sec">
                                        <div  className="img-box">
                                            <img
                                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-team-mihir-raval.jpg"
                                                alt="Mihir Rawal"/>
                                        </div>
                                        <div  className="member-detail"><h6 >Mihir
                                            Rawal</h6><p >Director, Operations</p>
                                            <div  className="member-social-links"><a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/mihirrawal"
                                                tabIndex="0"><span
                                                aria-hidden="true"
                                                className="fa fa-linkedin">
                                                <FaLinkedinIn/>
                                            </span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div _ngcontent-c3="" className="slide slick-slide slick-active" data-slick-index="2"
                                     aria-hidden="false" style={{width: '380px'}} tabIndex="-1" role="option"
                                     aria-describedby="slick-slide02">
                                    <div _ngcontent-c3="" className="team-photos-sec">
                                        <div _ngcontent-c3="" className="img-box"><img _ngcontent-c3=""
                                                                                       src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-team-jigar-panchal.jpg"
                                                                                       alt="Jigar Panchal"/></div>
                                        <div _ngcontent-c3="" className="member-detail"><h6 _ngcontent-c3="">Jigar
                                            Panchal</h6><p _ngcontent-c3="">Director, Global Sales</p>
                                            <div _ngcontent-c3="" className="member-social-links"><a _ngcontent-c3=""
                                                                                                     target="_blank"
                                                                                                     href="https://in.linkedin.com/in/jigarpanchal"
                                                                                                     tabIndex="0"><span
                                                _ngcontent-c3="" aria-hidden="true"
                                                className="fa fa-linkedin">
                                                <FaLinkedinIn/>
                                            </span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div _ngcontent-c3="" className="slide slick-slide slick-active" data-slick-index="3"
                                     aria-hidden="false" style={{width: "380px"}} tabIndex="-1" role="option"
                                     aria-describedby="slick-slide03">
                                    <div _ngcontent-c3="" className="team-photos-sec">
                                        <div _ngcontent-c3="" className="img-box"><img _ngcontent-c3=""
                                                                                       src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-team-kiran-jadav.jpg"
                                                                                       alt="Kiran Jadav"/></div>
                                        <div _ngcontent-c3="" className="member-detail"><h6 _ngcontent-c3="">Kiran
                                            Jadav</h6><p _ngcontent-c3="">Delivery Head</p>
                                            <div _ngcontent-c3="" className="member-social-links"><a _ngcontent-c3=""
                                                                                                     target="_blank"
                                                                                                     href="https://www.linkedin.com/in/kiranjadav"
                                                                                                     tabIndex="0"><span
                                                _ngcontent-c3="" aria-hidden="true"
                                                className="fa fa-linkedin">
                                                <FaLinkedinIn/>
                                            </span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div _ngcontent-c3="" className="slide slick-slide slick-active" data-slick-index="4"
                                     aria-hidden="false" style={{width: '380px'}} tabIndex="-1" role="option"
                                     aria-describedby="slick-slide04">
                                    <div _ngcontent-c3="" className="team-photos-sec">
                                        <div _ngcontent-c3="" className="img-box"><img _ngcontent-c3=""
                                                                                       src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/img-team-pradeep-mundra.jpg"
                                                                                       alt="Pradeep Mundra"/></div>
                                        <div _ngcontent-c3="" className="member-detail"><h6 _ngcontent-c3="">Pradeep
                                            Mundra</h6><p _ngcontent-c3="">Head, IT and Infrastructure</p>
                                            <div _ngcontent-c3="" className="member-social-links">
                                                <a _ngcontent-c3=""
                                                   target="_blank"
                                                   href="https://www.linkedin.com/in/pradeep-mundra-77ab48b"
                                                   tabIndex="0"><span
                                                    _ngcontent-c3="" aria-hidden="true"
                                                    className="fa fa-linkedin">
                                                 <FaLinkedinIn/>
                                            </span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeamMemberSlider;