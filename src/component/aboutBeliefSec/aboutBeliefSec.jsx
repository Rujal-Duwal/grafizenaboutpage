import React from 'react';
import {Container, Row} from "react-bootstrap";
import "./aboutBelifSec.css"

function AboutBeliefSec(props) {
    return (
        <section  className="about-belief-sec">
            <Container  className="container">
                <h2  className="text-center">Belief of Every IndiaNICian</h2>
                <Row  className="row">
                    <div  className="col-12 col-md-6 col-lg-4">
                        <div  className="we-belief " style={{marginTop:70}}>
                            <img
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-people.svg"
                                className=" ng-lazyloaded"/>
                            <h3
                            >Client-centric Approach</h3><p >For any business, customers
                            are always at the center. Being a leading web and mobile app development company, our
                            definition goes beyond our direct customers. We always start from where you are with your
                            ideas and we think from YOUR end customers' perspectives, their pain areas and devise a
                            solution that solves core problems to benefit your business.

                        </p></div>
                    </div>
                    <div  className="col-12 col-md-6 col-lg-4">
                        <div  className="we-belief" style={{marginTop:70}}>
                            <img
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-research.svg"
                                className=" ng-lazyloaded"/>
                            <h3
                            >Effective Collaboration</h3><p >Communication is the Key.
                            We tend to over-communicate at times. Although sounds overwhelming, but eventually it works
                            wonders for our client business. When our development team collaborates with our clients
                            sitting a thousand miles away, it's apparent that we stay in touch with platforms and
                            mediums that allow effectiveness, transparency, and accuracy.
                        </p></div>
                    </div>
                    <div  className="col-12 col-md-6 col-lg-4">
                        <div  className="we-belief " style={{marginTop:70}}>
                            <img
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-product-driven.svg"
                                className=" ng-lazyloaded"/>
                            <h3
                            >Quality Delivered in Time</h3>
                            <p >With over two decades of
                                experience in the offshore IT software development industry, we have a great set of internal
                                frameworks with best-in-class infrastructure that enables us to deliver solutions with
                                superior quality, at all times. All these years, we have learned how to prevent failures and
                                replicate success. We don't just brag about quality. We define and deliver it in time.
                            </p></div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default AboutBeliefSec;