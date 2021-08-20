import React from 'react';
import {Container} from "react-bootstrap";
import "./aboutGallerySec.scss"
import Gallery from "react-photo-gallery";

function AboutGallerySec(props) {

    const photos=[
        {
            src:"https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-1.jpg",
            width: 4,
            height: 3
        },
        {
            src:"https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-3.jpg",
            width: 3,
            height: 4
        },
        {
            src:"https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-4.jpg",
            width: 5,
            height: 4,
        },
        {
            src:"https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-2.jpg",
            width: 5,
            height: 3,
            size:100,
        },
        {
            src:"https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-5.jpg",
            width: 3,
            height: 3
        },
    ]
    return (
        <section  className="about-gallery-sec">
            <Container  className="container-fluid p-0">
                <Gallery photos={photos} direction='column' />;
                {/*<ResponsiveGallery*/}
                {/*    images={images}*/}
                {/*    numOfImagesPerRow={{xs: 1,s: 2,m: 3,l: 3}}*/}
                {/*    imageMaxWidth={{xs: 50,s: 50,m: 50,l:50,xl: 50,xxl:50}}*/}
                {/*/>,*/}
                {/*<div  className="gallery-grid">*/}
                {/*    <div  className="gallery-infra-col">*/}
                {/*        <div  className="medium-img-sec">*/}
                {/*            <img*/}
                {/*                 src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-1.jpg"*/}
                {/*                 className=" ng-lazyloaded"/>*/}
                {/*        </div>*/}
                {/*        <div  className="col-spacer"></div>*/}
                {/*        <div  className="small-img-sec">*/}
                {/*            <img*/}
                {/*                 src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-2.jpg"*/}
                {/*                 className=" ng-lazyloaded"/></div>*/}
                {/*    </div>*/}
                {/*    <div  className="gallery-center-col">*/}
                {/*        <div  className="large-img-sec">*/}
                {/*            <img*/}
                {/*                 src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-3.jpg"*/}
                {/*                 className=" ng-lazyloaded"/></div>*/}
                {/*    </div>*/}
                {/*    <div  className="gallery-infra-col">*/}
                {/*        <div  className="small-img-sec">*/}
                {/*            <img*/}
                {/*                 src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-4.jpg"*/}
                {/*                 className=" ng-lazyloaded"/></div>*/}
                {/*        <div  className="col-spacer"></div>*/}
                {/*        <div  className="medium-img-sec">*/}
                {/*            <img*/}
                {/*                 src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img-5.jpg"*/}
                {/*                 className=" ng-lazyloaded"/></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Container>
        </section>
    );
}

export default AboutGallerySec;