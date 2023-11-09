import { Container } from "react-bootstrap";
import ProductShowCaseCard_HomePage from "../ProductShowCaseCard_HomePage/ProductShowCaseCard_HomePage";
import './ProductShowCase_HomePage.css'


const ProductShowCase_HomePage = () => {
    return (
        <Container fluid className="productShowCaseHomePage px-4 ">
            <div className=" d-flex justify-content-between  align-items-center ">
                <h1 className="heading-offer-homepage">
                    Product Showcase
                </h1>

                <button className="btn-explore">
                    Explore
                </button>
            </div>

            <div className=" d-flex  justify-content-between  align-items-center ">

                <ProductShowCaseCard_HomePage></ProductShowCaseCard_HomePage>
                <ProductShowCaseCard_HomePage></ProductShowCaseCard_HomePage>
                <ProductShowCaseCard_HomePage></ProductShowCaseCard_HomePage>
            </div>

        </Container>
    );
};

export default ProductShowCase_HomePage;