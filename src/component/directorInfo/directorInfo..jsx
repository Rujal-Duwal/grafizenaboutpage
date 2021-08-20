import React from 'react';
import "./directorInfo.scss"

function DirectorInfo(props) {
    return (
        <section  className="director-info-sec" style={{padding: "50px 0"}}>
            <div  className="container">
                <div  className="director-quote">
                    <div  className="row">
                        <div
                            className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-md-2 order-lg-1">
                            <div  className="author-img">
                                <img  alt=""
                                      src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/sm-quote-img.png"
                                      className=" ng-lazyloaded"
                                />
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2"
                            style={{alignItems: 'center !important', display: "flex!important"}}
                        >
                            <div  className="quote-sec">
                                <h2 >
                                    “To live life within
                                    boundaries, to limit your existence by fearing the unexpected, to make choices based on
                                    needs and not wants, that is humanity’s biggest failure.”
                                </h2>
                                <h6>Sandeep Mundra</h6><p >CEO</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DirectorInfo;