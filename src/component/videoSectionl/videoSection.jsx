import React, {useRef, useState} from 'react';
import { Container,} from "react-bootstrap";
import "./videoSection.css"

function VideoSection(props) {
    const[playButton,setPlayButton]=useState(true)
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        vidRef.current.play();
        setPlayButton(false)
    }

    return (
        <section >
            <Container  className="container">
                <div  className="about-video-float-section" style={{height: "0px"}}></div>
                <div  className="about-video-section"  >
                    {/*<img*/}

                    {/*    className="scroll-video-btn"*/}
                    {/*    src="../assets/images/locker-close-icon.svg"*/}
                    {/*/>*/}
                    <div  className="infr-video">
                        <div
                            className="video-btn-play video-btn-pause"
                            style={{display:playButton || "none"}}
                            onClick={()=>handlePlayVideo()}
                        >
                        </div>
                        <video
                            ref={vidRef}
                            className="testimonial-video aboutus_video"
                            loop
                            onLoadedMetadata="this.muted=true"
                            width="100%"
                            poster="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/infrastructure-img.jpg"
                            muted
                        >
                            <source
                                type="video/webm"
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/10/indainic-infrastructure-video.mp4"/>
                            <source
                                type="video/mp4"
                                src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/10/indainic-infrastructure-video.mp4"
                            />
                        </video>
                        <div  className="video-full-screen"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default VideoSection;