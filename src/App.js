import logo from './logo.svg';
import './App.css';
import Banner from "./component/banner/Banner";
import VideoSection from "./component/videoSectionl/videoSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoWeAre from "./component/whoWeAre/whoWeAre";
import AboutBeliefSec from "./component/aboutBeliefSec/aboutBeliefSec";
import AboutGallerySec from "./component/aboutGallerySec/aboutGallerySec";
import BusinessGrowthSec from "./component/businessGrowthSec/businessGrowthSec";
import TeamMemberSlider from "./component/teamMemberSlider/teamMemberSlider";
import DirectorInfo from "./component/directorInfo/directorInfo.";
import CompanyInfo from "./component/companyInfo/companyInfo";
import AboutWeWork from "./component/aboutWeWork/aboutWeWork";
import WhyWe from "./component/whyWe/whyWe";
import "./static/styleSheet/style.scss"

function App() {
    return (
        <div className="about-page-common">
            <Banner/>
            <VideoSection/>
            <WhoWeAre/>
            <AboutBeliefSec/>
            <AboutGallerySec/>
            <BusinessGrowthSec/>
            <TeamMemberSlider/>
            <DirectorInfo/>
            <CompanyInfo/>
            <AboutWeWork/>
            <WhyWe/>
        </div>
    );
}

export default App;
