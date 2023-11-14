import "./ProductContainer.css"

const ProductContainer = ({ imgWidth, imgHeight, width, height, imgLeft, imgSrc, text, textLeft, textWidth }) => {

    // Container's style
    const style = {
        background: "linear-gradient(86.94deg, #E9EEF7 0.88%, #D3DCEE 100%)",
        overflow: "hidden",
        width: width,
        height: height
    }

    // style for image
    const imgStyle = {
        width: imgWidth,
        height: imgHeight,
        position: "relative",
        left: imgLeft
    }
    return (
        <div style={style} className="productContainer mb-2 mb-md-0 mb-lg-0 d-flex  justify-content-between  align-items-center rounded-3 productContainer  pe-3  ">

            {/* product image */}
            <img style={imgStyle} src={imgSrc} alt="" />

            {/* product headline */}
            <div style={{ width: textWidth }}><h3 className=" text">{text}</h3></div>
        </div>
    );
};

export default ProductContainer;