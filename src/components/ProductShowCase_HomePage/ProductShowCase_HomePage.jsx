import { Container } from "react-bootstrap";
import ProductShowCaseCard_HomePage from "../ProductShowCaseCard_HomePage/ProductShowCaseCard_HomePage";
import './ProductShowCase_HomePage.css'
import { useEffect, useState } from "react";


const ProductShowCase_HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Contains screen Width

    // Use the useEffect hook to update the screenWidth state whenever the window size changes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container fluid className="productShowCaseHomePage ">
            <div style={{ marginBottom: "3.888888888888889vw" }} className=" d-flex flex-column 
            flex-md-row flex-lg-row justify-content-between  align-items-center ">
                <h1 className="heading-productShowCase">
                    Product Showcase
                </h1>

                <button className="btn-explore-productShowCase">
                    Explore
                </button>
            </div>

            <div className="mt-5 mt-md-0 mt-lg-0 d-flex flex-column flex-md-row flex-lg-row     justify-content-between  align-items-center ">

                <ProductShowCaseCard_HomePage
                    productImg="/assets/Images/kindpng_5568993 1.png"
                    category="Pharmaceuticals"
                    productImgWidth={screenWidth < 576 ? "60.1528" : "12.152777777777779"}
                    productImgHeight={screenWidth < 576 ? "42.86111" : "9.86111111111111"}
                    moveTop={false}
                ></ProductShowCaseCard_HomePage>

                <ProductShowCaseCard_HomePage
                    productImg="/assets/Images/kindpng_5568993 2.png"
                    category="Generic Medicines"
                    productImgWidth={screenWidth < 576 ? "60.1528" : "12.152777777777779"}
                    productImgHeight={screenWidth < 576 ? "42.86111" : "9.86111111111111"}
                    moveTop={false}
                ></ProductShowCaseCard_HomePage>

                <ProductShowCaseCard_HomePage
                    productImg="/assets/Images/pngwing 1.png"
                    category="OTC Products"
                    productImgWidth={screenWidth < 576 ? "50.4167" : "10.416666666666666"}
                    productImgHeight={screenWidth < 576 ? "53.8472" : "12.847222222222221"}
                    moveTop={true}
                ></ProductShowCaseCard_HomePage>
            </div>

        </Container>
    );
};

export default ProductShowCase_HomePage;