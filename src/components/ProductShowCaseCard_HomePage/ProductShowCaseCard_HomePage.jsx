import { AiOutlineArrowRight } from 'react-icons/ai'
import './ProductShowCaseCard_HomePage.css'

const ProductShowCaseCard_HomePage = () => {
    return (
        <div  className="ProductShowCaseCard_HomePage position-relative d-flex  flex-column  justify-content-start align-items-center  ">
            {/* Product Image */}
            <img src="../../../public/assets/Images/kindpng_5568993 1.png" className="productImage mx-auto  position-relative  z-1 " alt="" />

            {/* Heading */}
            <h2 style={{ marginBottom: "1.25vw" }} className="productCategory_heading position-relative  z-1 text-start  ">
                Pharmaceuticals
            </h2>

            {/* Show more button */}
            <button className="showMoreButton position-relative z-1 ">
                Shop Now
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>

            <img src="../../../public/assets/Images/Group 44.png" className=' w-100  h-75  position-absolute  z-0  bottom-0 ' alt="" />


        </div>
    );
};

export default ProductShowCaseCard_HomePage;
