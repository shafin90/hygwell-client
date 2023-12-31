import { Col, Container, Row } from 'react-bootstrap';
import './Product.css'
import ProductContainer from '../ProductContainer/ProductContainer';
import { useState } from 'react';
import { AttentionSeeker, Zoom, Bounce, Slide, Fade } from 'react-awesome-reveal';
import { useLocation, useNavigate } from 'react-router-dom';


const Products = ({ bgColor, headingText1, headingText2, headingText3, headingText4, headingTextColor1, headingTextColor2, headingTextColor3, headingTextColor4, firstProductImg, secondProductImg, thirdProductImg, fourthProductImg, fifthProductImg, sixthProductImg, seventhProductImg, bottomTextheading, bottomTextArticle, bottomTextBlob, bottomTextImg, bottomTextBlobWidth, bottomTextBlobHeight, bottomTextImgWidth, bottomTextImgHeight, bottomTextImgLeft, bottomTextBlobRight, shortTheFont, borderColor, detailBoxBGIMG }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const { pathname } = useLocation();

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

    const productBottomLeftFrontIMg = {
        width: `${bottomTextImgWidth}vw`,
        height: `${bottomTextImgHeight}vw`,
        zIndex: 1,
        position: "relative",
        top: "5vw",
        left: `${bottomTextImgLeft}vw`,
    }
    const productBottomRightIMG = {
        width: `${bottomTextBlobWidth}vw`,
        height: `${bottomTextBlobHeight}vw`,
        zIndex: -1,
        position: "relative",
        right: `${bottomTextBlobRight}vw`
    }

    return (
        <Container fluid className='products px-0 products z-3  position-relative'>

            {/* backside div that contains background's gradient color */}
            <div style={style} className='productsBehindDiv'></div>

            {/* product section */}
            <div className='productSection mb-2 '>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsPharma") }} className='productToNavigate img-fluid ' src={pathname === "/productsPharma" ? "/assets/Images/Veterinary.png" : firstProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1.png" className={pathname === "/productsPharma" ? 'down-arrow-sign' : ' d-none '} alt="" />

                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsNutra") }} className=' productToNavigate img-fluid ' src={pathname === "/productsNutra" ? "/assets/Images/Veterinary (1).png" : secondProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (1).png" className={pathname === "/productsNutra" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsVetarn") }} className='productToNavigate img-fluid ' src={pathname === "/productsVetarn" ? "/assets/Images/Veterinary (2).png" : thirdProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (2).png" className={pathname === "/productsVetarn" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsHerbal") }} className=' productToNavigate img-fluid ' src={pathname === "/productsHerbal" ? "/assets/Images/Veterinary (4).png" : fourthProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (3).png" className={pathname === "/productsHerbal" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsCosmetics") }} className=' productToNavigate img-fluid ' src={pathname === "/productsCosmetics" ? "/assets/Images/Veterinary (5).png" : fifthProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (4).png" className={pathname === "/productsCosmetics" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsFragrance") }} className=' productToNavigate img-fluid ' src={pathname === "/productsFragrance" ? "/assets/Images/Veterinary (6).png" : sixthProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (5).png" className={pathname === "/productsFragrance" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

                <div className=' d-flex flex-column  justify-content-between  align-items-center '>
                    <img onClick={() => { navigate("/productsSexual") }} className=' productToNavigate img-fluid ' src={pathname === "/productsSexual" ? "/assets/Images/Veterinary (7).png" : seventhProductImg} alt="" />

                    <img src="/assets/Images/Polygon 1 (6).png" className={pathname === "/productsSexual" ? 'down-arrow-sign' : ' d-none '} alt="" />
                </div>

            </div>

            {/* detail box */}
            <div style={detailBoxStyle} className=' detailBox rounded-4   '>

                {/* detaiBoxHeading */}
                <AttentionSeeker effect='pulse'>
                    <h1 className='detailBoxHeading text-center'>
                        <span style={{ color: headingTextColor1 }}>{headingText1}</span>
                        <span style={{ color: headingTextColor2 }}> {headingText2}</span>
                        <span style={{ color: headingTextColor3 }}> {headingText3}</span>
                        <span style={{ color: headingTextColor4 }}> {headingText4}</span>
                    </h1>
                </AttentionSeeker>

                <Bounce triggerOnce>
                    <img className='detailBoxImg' src="/assets/Images/hero-img.png" alt="" />
                </Bounce>

                <img className='detailBoxImgBG' src={detailBoxBGIMG} alt="" />

                {/* spotlightHeading */}
                <h2 className=' mb-5 spotlightHeading text-center'> Products in the spotlight</h2>

                {/* border image */}
                <img className=' d-block  mx-auto  borderimg mb-5 ' src="/assets/Images/Rectangle 8.png" alt="" />

                <div className=' mb-0 mb-md-3 mb-lg-3   d-flex flex-column  flex-md-row  flex-lg-row  justify-content-between  align-items-center mx-auto pcc '>
                    <Zoom cascade>
                        <ProductContainer
                            imgSrc="/assets/Images/img.png"
                            imgWidth={screenWidth < 575 ? "41.73vw" : "21.73611111111111vw"}
                            imgHeight={screenWidth < 575 ? "19.63vw" : "9.63888888888889vw"}
                            width={screenWidth < 575 ? "70vw" : "41.041666666666664vw"}
                            height={screenWidth < 575 ? "20.4444vw" : "9.444444444444445vw"}
                            text="Prescription
                        Medications"
                            imgLeft={screenWidth < 575 ? "-4vw" : "9vw"}
                            textWidth="10vw"
                        ></ProductContainer>


                        <ProductContainer
                            imgSrc="/assets/Images/4054575-removebg-preview 1.png"
                            imgWidth={screenWidth < 575 ? "24.88888888888889vw" : "13.88888888888889vw"}
                            imgHeight={screenWidth < 575 ? "16.208333333333334vw" : "10.208333333333334vw"}
                            width={screenWidth < 575 ? "70vw" : "28.958333333333332vw"}
                            height={screenWidth < 575 ? "16.44vw" : "9.444444444444445vw"}
                            text="Women's
                        Health"
                            imgLeft={screenWidth < 575 ? "4vw" : "5vw"}
                            textWidth={screenWidth < 575 ? "10vw" : "7vw"}
                        ></ProductContainer>
                    </Zoom>
                </div>

                <div className=' mb-0 mb-md-3  mb-lg-3   d-flex flex-column  flex-md-row  flex-lg-row  justify-content-between  align-items-center mx-auto pcc '>

                    <Zoom cascade>
                        <ProductContainer
                            imgSrc="/assets/Images/Rectangle 47.png"
                            imgWidth={screenWidth < 575 ? "21.88888888888889vw" : "13.88888888888889vw"}
                            imgHeight={screenWidth < 575 ? "16vw" : "10vw"}
                            width={screenWidth < 575 ? "70vw" : "28.958333333333332vw"}
                            height={screenWidth < 575 ? "16.44vw" : "9.444444444444445vw"}
                            text="OTC
                        Products"
                            imgLeft="7vw"
                            textWidth={screenWidth < 575 ? "10vw" : "5vw"}
                        ></ProductContainer>

                        <ProductContainer
                            imgSrc="/assets/Images/img (1).png"
                            imgWidth={screenWidth < 575 ? "31.8888vw" : "21.88888888888889vw"}
                            imgHeight={screenWidth < 575 ? "15.208333vw" : "10.208333333333334vw"}
                            width={screenWidth < 575 ? "70vw" : "41.041666666666664vw"}
                            height={screenWidth < 575 ? "20.444vw" : "9.444444444444445vw"}
                            text="Antibiotics &
                        Antivirals"
                            imgLeft={screenWidth < 575 ? "1vw" : "5vw"}
                            textWidth="10vw"
                        ></ProductContainer>
                    </Zoom>
                </div>

                <div className=' d-flex flex-column  flex-md-row  flex-lg-row   justify-content-between  align-items-center mx-auto pcc '>
                    <Zoom cascade>
                        <ProductContainer
                            imgSrc="/assets/Images/img (2).png"
                            imgWidth={screenWidth < 575 ? "20.8889vw" : "13.88888888888889vw"}
                            imgHeight={screenWidth < 575 ? "14vw" : "9vw"}
                            width={screenWidth < 575 ? "70vw" : "22.98611111111111vw"}
                            height={screenWidth < 575 ? "24vw" : "9.444444444444445vw"}
                            text="Pediatrics &
                        Family Health"
                            imgLeft="4vw"
                            textWidth="10vw"
                        ></ProductContainer>

                        <ProductContainer
                            imgSrc="/assets/Images/img (3).png"
                            imgWidth="21.88888888888889vw"
                            imgHeight={screenWidth < 575 ? "14.20vw" : "10.208333333333334vw"}
                            width={screenWidth < 575 ? "70vw" : "22.916666666666668vw"}
                            height={screenWidth < 575 ? "16.6666vw" : "9.444444444444445vw"}
                            text="Diabetes Care"
                            imgLeft="3vw"
                            textWidth={screenWidth < 575 && "10vw"}
                        ></ProductContainer>

                        <ProductContainer
                            imgSrc="/assets/Images/img (4).png"
                            imgWidth={screenWidth < 575 ? "27.8888889vw" : "18.88888888888889vw"}
                            imgHeight={screenWidth < 565 ? "15.203vw" : "8.208333333333334vw"}
                            width={screenWidth < 575 ? "70vw" : "22.98611111111111vw"}
                            height={screenWidth < 575 ? "16.66vw" : "9.444444444444445vw"}
                            text="Men's
                        Health"
                            imgLeft={screenWidth < 575 ? "1vw" : "-2vw"}
                            textWidth={screenWidth < 575 && "10vw"}
                        ></ProductContainer>
                    </Zoom>
                </div>

                <div className='bottom_stuff_product'>
                    <div className=' productBottom d-flex  justify-content-start  align-items-center '>
                        {/* Left side front image */}
                        <Fade cascade>
                            <img style={productBottomLeftFrontIMg} src={bottomTextImg} alt="" />
                        </Fade>
                        {/* left side image  back side */}
                        <img style={productBottomRightIMG} src={bottomTextBlob} alt="" />

                    </div>

                    {/* Bottom text */}
                    <div className="productBottomText d-flex  flex-column  justify-content-between  align-items-end">
                        <Fade cascade>
                            <h1 style={{ color: borderColor }} className='productBottomTextHeading text-end'>{bottomTextheading}</h1>
                            <article style={{ fontSize: shortTheFont && "1vw", lineHeight: shortTheFont && "1.3vw" }} className='productBottomTextArticle text-end '>
                                {bottomTextArticle}
                            </article>
                        </Fade>
                    </div>

                    {/* Right-bottom backside image */}
                    <img className='right_bottom_backSide_img_productPage' src="/assets/Images/Vector.png" alt="" />
                </div>
            </div>

        </Container>
    );
};

export default Products;