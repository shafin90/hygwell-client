import { useState } from "react";
import { Container } from "react-bootstrap";


const Certification_AboutUsPage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    return (
        <Container style={{width:"100vw", height:`${screenWidth<576?"150vw":"67.70833333333333vw"}` }}>
            <h1 className=" fw-bold  ms-5 mt-4 mt-md-0 mt-lg-0 ">Certifications</h1>
            
        </Container>
    );
};

export default Certification_AboutUsPage;