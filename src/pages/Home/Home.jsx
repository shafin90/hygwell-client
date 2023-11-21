import React, { Suspense } from "react";
import { Container } from "react-bootstrap";

const LazyBanner = React.lazy(() => import("../../components/Banner/Banner"));
const LazyBackgroundImageContainer = React.lazy(() => import("../../components/BackgroundImageContainer/BackgroundImageContainer"));
const LazyAboutUs = React.lazy(() => import("../../components/AboutUs_HomePage/AboutUs_HomePage"));
const LazyOurOfferings = React.lazy(() => import("../../components/OurOfferings_HomePage/OurOfferings_HomePage"));
const LazyOurValues = React.lazy(() => import("../../components/OurValues_HomePage/OurValues_HomePage"));
const LazyProductShowCase = React.lazy(() => import("../../components/ProductShowCase_HomePage/ProductShowCase_HomePage"));
const LazyOurVision = React.lazy(() => import("../../components/OurVision/OurVision"));
const LazyTechnicalHealthCareSection = React.lazy(() => import("../../components/TechniqalHealthCareSection_HomPage/TechniqalHealthCareSection_HomPage"));
const LazyMeetOurTeam = React.lazy(() => import("../../components/MeetOurTeam/MeetOurTeam"));
const LazyGetYourPharmacy = React.lazy(() => import("../../components/GetYourPharmacy_HomePage/GetYourPharmacy_HomePage"));
const LazyBeforeFooter = React.lazy(() => import("../../components/BeforeFooter_HomePage/BeforeFooter_HomePage"));
const LazyFooter = React.lazy(() => import("../../components/Footer/Footer"));

const Home = () => {
    return (
        <Container fluid className="px-0 overflow-x-hidden overflow-y-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyBanner
                    heading="Welcome To HYGWELL"
                    article="Your Trusted Partner in Healthcare Solutions"
                    btn={true}
                    fontweightOfArticle="500"
                />
            </Suspense>

            <Suspense>
                <LazyBackgroundImageContainer rightSideImg="/assets/Images/Group 1171282607.png" />
            </Suspense>

            <Suspense>
                <LazyAboutUs />
            </Suspense>

            <Suspense>
                <LazyOurOfferings />
            </Suspense>

            <Suspense>
                <LazyOurValues />
            </Suspense>

            <Suspense>
                <LazyProductShowCase />
            </Suspense>

            <Suspense>
                <LazyOurVision />
            </Suspense>

            <Suspense>
                <LazyTechnicalHealthCareSection />
            </Suspense>

            <Suspense>
                <LazyMeetOurTeam />
            </Suspense>

            <Suspense>
                <LazyGetYourPharmacy />
            </Suspense>

            <Suspense>
                <LazyBeforeFooter />
            </Suspense>

            <Suspense>
                <LazyFooter />
            </Suspense>
        </Container >
    );
};

export default Home;
