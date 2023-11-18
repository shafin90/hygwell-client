import { Col, Container, Row } from "react-bootstrap";
import ProductShowCaseCard_HomePage from "../ProductShowCaseCard_HomePage/ProductShowCaseCard_HomePage";
import { AttentionSeeker, Bounce, Fade, Slide } from "react-awesome-reveal";

const ProductShowCase_HomePage = () => {

    return (
        <Container fluid style={{ backgroundColor: "#cddfaa" }} className=" py-5  mb-5 ">
            <Container className="d-flex justify-content-between align-items-center px-0">
                <h1 className="h1 fw-bold">
                    <Slide duration={500}>
                        Product Showcase
                    </Slide>
                </h1>

                <AttentionSeeker effect="rubberBand">
                    <button className="btn btn-outline-success fw-bold px-5 py-3 rounded-3">
                        Explore
                    </button>
                </AttentionSeeker>
            </Container>

            <Container className="mb-5">
           
                    <Row className="mt-5 d-flex justify-content-between align-items-center px-0">

                        <Col md={4} className=" mb-5  mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 ">
                            <ProductShowCaseCard_HomePage
                                productImg="/assets/Images/kindpng_5568993 1.png"
                                category="Pharmaceuticals"

                            ></ProductShowCaseCard_HomePage>
                        </Col>

                        <Col md={4} className=" mb-5  mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 ">
                            <ProductShowCaseCard_HomePage
                                productImg="/assets/Images/kindpng_5568993 2.png"
                                category="Generic Medicines"

                            ></ProductShowCaseCard_HomePage>
                        </Col>

                        <Col md={4} className=" mb-5  mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 ">
                            <ProductShowCaseCard_HomePage
                                productImg="/assets/Images/pngwing 1 (1).png"
                                category="OTC Products"

                            ></ProductShowCaseCard_HomePage>
                        </Col>

                    </Row>
          

            </Container>
        </Container>
    );
};

export default ProductShowCase_HomePage;