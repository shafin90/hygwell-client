import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_Pharma = () => {
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

            <div style={{ marginBottom:"400px"}}></div>
            <Products
                bgColor="linear-gradient(180deg, rgba(4, 60, 170, 0.27) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="YOUR"
                headingText2="HEALTH"
                headingText3="OUR"
                headingText4="FOCUS"
                headingTextColor1="#365F42"
                headingTextColor2="#C89595"
                headingTextColor3="#365F42"
                headingTextColor4="#C89595"
                firstProductImg="/assets/Images/Veterinary.png"
                secondProductImg="/assets/Images/Nutraceuticals.png"
                thirdProductImg="../../../public/assets/Images/Herbaceuticals.png"
                bottomTextheading="Express your commitment to health
                your health vow."
                bottomTextArticle="The power of pharmaceuticals is that
                they speak to your body, ... and script
                a healthier future."
                bottomTextBlob="/assets/Images/Blob.png"
                bottomTextImg="/assets/Images/Group (3).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImgWidth="24.90138888888889"
                bottomTextImgHeight="17.01388888888889"
                bottomTextImgLeft="3.5"
                bottomTextBlobRight="25"
                borderColor="#043CAA75"
                detailBoxBGIMG="/assets/Images/Group 1171282628.png"
            ></Products>

        </div>
    );
};

export default Products_Pharma;