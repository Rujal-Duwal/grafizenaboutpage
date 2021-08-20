import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import './businessGrowth.scss'
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function BusinessGrowthSec(props) {

    const [didViewCountUp,setDidViewCountUp]= useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    }

    return (
        <section  className="business-growth-sec text-center sec-pad-100">
            <Container  className="container">
                <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{top: 10}}
                    delayedCall
                >
                    <div  className="growth-detail">
                        <h2 >We've helped businesses increase
                            their revenue on an average by 90% in their first year with us!
                        </h2>
                        <div  className="counter-sec">
                            <div  className="row">
                                <div  className="col-12 col-md-4 col-lg-4 counters">
                                    <span>
                                    <CountUp
                                        start={0}
                                        end={didViewCountUp ? 3000 : 0}
                                        duration={2}
                                    />
                                        </span>
                                    <span>+</span>
                                    <p >Satisfied Clients Across the Globe</p>
                                </div>
                                <div  className="col-12 col-md-4 col-lg-4 counters">
                                    <span>
                                    <CountUp
                                        start={0}
                                        end={didViewCountUp ? 7000 : 0}
                                        duration={2}
                                    />
                                        </span>
                                    <span>+</span>
                                    <p >Projects Delivered Successfully</p>
                                </div>
                                <div  className="col-12 col-md-4 col-lg-4 counters">
                                    <soan>
                                        <CountUp
                                            start={0}
                                            end={didViewCountUp ? 500 : 0}
                                            duration={2}
                                        />
                                    </soan>
                                    <span>+</span>
                                    <p >Experts Under the Same Roof</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
            </Container>
        </section>
    );
}

export default BusinessGrowthSec;