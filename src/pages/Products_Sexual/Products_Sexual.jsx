import AnimatedCursor from "react-animated-cursor";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_Sexual = () => {
    return (
        <div>
            {/* customised cursor */}
            <AnimatedCursor
                color='25, 135, 84'
            />
            <Banner
                heading="Products"
                article="HYGWELL is your trusted partner for high-quality pharmaceuticals solutions. We specialize in providing the best healthcare services for you with a dedication to excellence, customer satisfaction, and constant innovation."
                fontweightOfArticle="400"
            ></Banner>

            <BackgroundImageContainer
                rightSideImg="/assets/Images/Group 1171282607.jpg"
            ></BackgroundImageContainer>

            <div style={{ marginBottom: "400px" }}></div>

            <Products
                bgColor="linear-gradient(180deg, rgba(240, 84, 168, 0.27) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="ELEVATE"
                headingText2="INTIMACY"
                headingText3="AWAKEN"
                headingText4="PLEASURE"
                headingTextColor1="#365F42"
                headingTextColor2="##C89595"
                headingTextColor3="#365F42"
                headingTextColor4="##C89595"
                firstProductImg="/assets/Images/Nutraceuticals.png"
                secondProductImg="/assets/Images/Nutraceuticals (2).png"
                thirdProductImg="/assets/Images/Nutraceuticals (3).png"
                fourthProductImg="/assets/Images/Nutraceuticals (4).png"
                fifthProductImg="/assets/Images/Nutraceuticals (5).png"
                sixthProductImg="/assets/Images/Nutraceuticals (7).png"
                seventhProductImg="/assets/Images/Nutraceuticals (8).png"
                bottomTextheading="Let your desire guide you, your intimate mantra."
                bottomTextArticle="The power of sensuality is that
                it speaks to your core, ... and sparks
                deep connections."

                bottomTextBlob="/assets/Images/Blob (13).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/Daco_247602 1.png"
                bottomTextImgWidth="16"
                bottomTextImgHeight="23"
                bottomTextImgLeft="2"
                bottomTextBlobRight="16"
                borderColor="#F054A8"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (6).png"
            >
            </Products>

        </div>
    );
};

export default Products_Sexual;