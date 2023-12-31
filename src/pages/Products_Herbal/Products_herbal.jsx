
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_herbal = () => {
    return (
        <div>
           
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
                bgColor="linear-gradient(180deg, rgba(217, 214, 184, 0.27) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="NATURE'S"
                headingText2="REMEDIES"
                headingText3="NATURAL"
                headingText4="LIFE"
                headingTextColor1="#C89595"
                headingTextColor2="#365F42"
                headingTextColor3="#365F42"
                headingTextColor4="#C89595"
                firstProductImg="/assets/Images/Nutraceuticals.png"
                secondProductImg="/assets/Images/Nutraceuticals (2).png"
                thirdProductImg="/assets/Images/Nutraceuticals (3).png"
                fourthProductImg="/assets/Images/Nutraceuticals (4).png"
                fifthProductImg="/assets/Images/Nutraceuticals (5).png"
                sixthProductImg="/assets/Images/Nutraceuticals (7).png"
                seventhProductImg="/assets/Images/Nutraceuticals (8).png"
                bottomTextheading="Let herbs guide you,your wellness pledge"
                bottomTextArticle="The power of herbs is that they resonate within, ... and cultivate a naturally healthy you."
                bottomTextBlob="/assets/Images/Blob (8).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/Image.png"
                bottomTextImgWidth="15"
                bottomTextImgHeight="19"
                bottomTextImgLeft="2"
                bottomTextBlobRight="15"
                borderColor="#D9D6B8"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (3).png"
            >

            </Products>

        </div>
    );
};

export default Products_herbal;