import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_Nutra = () => {
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
                bgColor="linear-gradient(180deg, rgba(215, 95, 131, 0.53) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="NUTRATION"
                headingText2="FOR"
                headingText3="YOUR"
                headingText4="WELLNESS"
                headingTextColor1="#C89595"
                headingTextColor2="#365F42"
                headingTextColor3="#365F42"
                headingTextColor4="#C89595"
                firstProductImg="/assets/Images/Nutraceuticals.png"
                secondProductImg= "/assets/Images/Nutraceuticals (2).png"
                thirdProductImg= "/assets/Images/Nutraceuticals (3).png"
                fourthProductImg= "/assets/Images/Nutraceuticals (4).png"
                fifthProductImg= "/assets/Images/Nutraceuticals (5).png"
                sixthProductImg= "/assets/Images/Nutraceuticals (7).png"
                seventhProductImg= "/assets/Images/Nutraceuticals (8).png"
                bottomTextheading="Express your commitment to health your health vow"
                bottomTextArticle="The power of pharmaceuticals is that they speak to your body, ... and script a healthier future."
                bottomTextBlob="/assets/Images/Blob (2).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/Daco_4503636 1.png"
                bottomTextImgWidth="14"
                bottomTextImgHeight="23"
                bottomTextImgLeft="3"
                bottomTextBlobRight="14"
                borderColor="#D75F83BD"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (1).png"
            >

            </Products>

        </div>
    );
};

export default Products_Nutra;