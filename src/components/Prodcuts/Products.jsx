import { Col, Container, Row } from 'react-bootstrap';
import './Product.css'
import ProductContainer from './ProductContainer/ProductContainer';


const Products = ({bgColor,headingText1,headingText2,headingText3, headingText4, headingTextColor1, headingTextColor2, headingTextColor3, headingTextColor4, firstProductImg, secondProductImg, thirdProductImg, bottomTextheading, bottomTextArticle, bottomTextBlob, bottomTextImg, bottomTextBlobWidth, bottomTextBlobHeight, bottomTextImgWidth, bottomTextImgHeight,  bottomTextImgLeft, bottomTextBlobRight,shortTheFont, borderColor, detailBoxBGIMG}) => {
    const style = {
        background: bgColor,
    }

    const detailBoxStyle = {
        border: `3px solid ${borderColor}`,
        borderRadious: "25px",
        width: "90.41666666666667vw",
        position: "relative",
        left: "6.041666666666667vw"
    }



const productBottomLeftFrontIMg ={
    width: `${bottomTextImgWidth}vw` ,
    height: `${bottomTextImgHeight}vw`,
    zIndex: 1,
    position: "relative",
    top: "5vw",
    left:  `${bottomTextImgLeft}vw`,
}
const productBottomRightIMG = {
    width: `${bottomTextBlobWidth}vw`,
    height: `${bottomTextBlobHeight}vw`,
    zIndex: -1,
    position: "relative",
    right: `${bottomTextBlobRight}vw`
} 

    return (
        <Container  fluid className='products px-0 products z-3  position-relative '>

            {/* backside div that contains background's gradient color */}
            <div style={style} className='productsBehindDiv'></div>

            {/* product section */}
            <div className='productSection mb-2 '>
                <img className=' img-fluid ' src={firstProductImg} alt="" />
                <img className=' img-fluid ' src={secondProductImg} alt="" />
                <img className=' img-fluid ' src={thirdProductImg} alt="" />
                <img className=' img-fluid ' src={thirdProductImg} alt="" />
                <img className=' img-fluid ' src={thirdProductImg} alt="" />
                <img className=' img-fluid ' src={thirdProductImg} alt="" />
                <img className=' img-fluid ' src={thirdProductImg} alt="" />
            </div>

            {/* detail box */}
            <div style={detailBoxStyle} className=' detailBox rounded-4   '>

                {/* detaiBoxHeading */}
                <h1 className=' detailBoxHeading text-center '>
                    <span style={{ color: headingTextColor1 }}>{headingText1}</span>
                    <span style={{ color: headingTextColor2 }}> {headingText2}</span>
                    <span style={{ color: headingTextColor3 }}> {headingText3}</span>
                    <span style={{ color: headingTextColor4 }}> {headingText4}</span>
                </h1>

                <img className='detailBoxImg' src="/assets/Images/hero-img.png" alt="" />
                <img className='detailBoxImgBG' src={detailBoxBGIMG} alt="" />

                {/* spotlightHeading */}
                <h2 className=' mb-5 spotlightHeading text-center'> Products in the spotlight</h2>

                {/* border image */}
                <img className=' d-block  mx-auto  borderimg mb-5 ' src="/public/assets/Images/Rectangle 8.png" alt="" />

                <div className=' mb-3  d-flex  justify-content-between  align-items-center mx-auto pcc '>
                    <ProductContainer
                        imgSrc="/assets/Images/img.png"
                        imgWidth="21.73611111111111vw"
                        imgHeight="8.63888888888889vw"
                        width="41.041666666666664vw"
                        height="9.444444444444445vw"
                        text="Prescription
                        Medications"
                        imgLeft="9vw"
                        textWidth="10vw"

                    ></ProductContainer>


                    <ProductContainer

                        imgSrc="/assets/Images/4054575-removebg-preview 1.png"
                        imgWidth="13.88888888888889vw"
                        imgHeight="10.208333333333334vw"
                        width="28.958333333333332vw"
                        height="9.444444444444445vw"
                        text="Women's
                        Health"
                        imgLeft="5vw"
                        textWidth="7vw"
                    ></ProductContainer>

                </div>

                <div className=' mb-3  d-flex  justify-content-between  align-items-center mx-auto pcc '>
                    <ProductContainer
                        imgSrc="/assets/Images/Rectangle 47.png"
                        imgWidth="13.88888888888889vw"
                        imgHeight="9vw"
                        width="28.958333333333332vw"
                        height="9.444444444444445vw"
                        text="OTC
                        Products"
                        imgLeft="7vw"
                        textWidth="5vw"

                    ></ProductContainer>


                    <ProductContainer

                        imgSrc="../../../public/assets/Images/img (1).png"
                        imgWidth="21.88888888888889vw"
                        imgHeight="10.208333333333334vw"
                        width="41.041666666666664vw"
                        height="9.444444444444445vw"
                        text="Antibiotics &
                        Antivirals"
                        imgLeft="5vw"
                        textWidth="10vw"

                    ></ProductContainer>

                </div>

                <div className=' d-flex  justify-content-between  align-items-center mx-auto pcc '>
                    <ProductContainer
                        imgSrc="../../../public/assets/Images/img (2).png"
                        imgWidth="13.88888888888889vw"
                        imgHeight="9vw"
                        width="22.98611111111111vw"
                        height="9.444444444444445vw"
                        text="Pediatrics &
                        Family Health"
                        imgLeft="4vw"
                        textWidth="10vw"
                    ></ProductContainer>


                    <ProductContainer
                        imgSrc="../../../public/assets/Images/img (3).png"
                        imgWidth="21.88888888888889vw"
                        imgHeight="10.208333333333334vw"
                        width="22.916666666666668vw"
                        height="9.444444444444445vw"
                        text="Diabetes Care"
                        imgLeft="3vw"
                    ></ProductContainer>

                    <ProductContainer
                        imgSrc="../../../public/assets/Images/img (4).png"
                        imgWidth="18.88888888888889vw"
                        imgHeight="8.208333333333334vw"
                        width="22.98611111111111vw"
                        height="9.444444444444445vw"
                        text="Men's
                        Health"
                        imgLeft="-2vw"
                    ></ProductContainer>

                </div>

                <div className=' productBottom d-flex  justify-content-start  align-items-center '>
                    {/* Left side front image */}
                    <img style={productBottomLeftFrontIMg} src={bottomTextImg} alt="" />

                    {/* left side image  back side */}
                    <img style={productBottomRightIMG} src={bottomTextBlob} alt="" />
                </div>

                <div className="productBottomText d-flex  flex-column  justify-content-between  align-items-end">
                    <h1 style={{color:borderColor}} className='productBottomTextHeading text-end'>{bottomTextheading}</h1>
                    <article style={{fontSize:shortTheFont&&"1vw", lineHeight:shortTheFont&&"1.3vw"}} className='productBottomTextArticle text-end '>
                        {bottomTextArticle}
                    </article>
                </div>





            </div>

        </Container>
    );
};

export default Products;