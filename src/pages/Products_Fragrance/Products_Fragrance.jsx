import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_Fragrance = () => {
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
                bgColor="linear-gradient(180deg, rgba(95, 215, 136, 0.27) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="UNVEIL"
                headingText2="YOUR"
                headingText3="SCENT"
                headingText4="STORY"
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
                bottomTextheading="Your fragrance is your message your scented slogan."
                bottomTextArticle="The beauty of fragrance is that
                it speaks to your heart, … and hopefully
                someone else's."

                bottomTextBlob="/assets/Images/Blob (10).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/Daco_4503636 1.png"
                bottomTextImgWidth="16"
                bottomTextImgHeight="23"
                bottomTextImgLeft="0"
                bottomTextBlobRight="16"
                borderColor="#5FD788"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (5).png"
            >
            </Products>

        </div>
    );
};

export default Products_Fragrance;