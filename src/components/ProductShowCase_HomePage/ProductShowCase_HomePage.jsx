import { Container } from "react-bootstrap";
import ProductShowCaseCard_HomePage from "../ProductShowCaseCard_HomePage/ProductShowCaseCard_HomePage";
import './ProductShowCase_HomePage.css'


const ProductShowCase_HomePage = () => {
    return (
        <Container fluid className="productShowCaseHomePage ">
            <div style={{marginBottom:"3.888888888888889vw"}} className=" d-flex justify-content-between  align-items-center ">
                <h1 className="heading-productShowCase">
                    Product Showcase
                </h1>

                <button className="btn-explore-productShowCase">
                    Explore
                </button>
            </div>

            <div className=" d-flex  justify-content-between  align-items-center ">

                <ProductShowCaseCard_HomePage
                productImg="../../../public/assets/Images/kindpng_5568993 1.png"
                category="Pharmaceuticals"
                productImgWidth="12.152777777777779"
                productImgHeight="9.86111111111111"
                moveTop={false}
                ></ProductShowCaseCard_HomePage>

                <ProductShowCaseCard_HomePage
                productImg="../../../public/assets/Images/kindpng_5568993 2.png"
                category="Generic Medicines"
                productImgWidth="12.152777777777779"
                productImgHeight="9.86111111111111"
                moveTop={false}
                ></ProductShowCaseCard_HomePage>

                <ProductShowCaseCard_HomePage
                productImg="../../../public/assets/Images/pngwing 1.png"
                category="OTC Products"
                productImgWidth="10.416666666666666"
                productImgHeight=" 12.847222222222221"
                moveTop={true}
                ></ProductShowCaseCard_HomePage>
            </div>

        </Container>
    );
};

export default ProductShowCase_HomePage;