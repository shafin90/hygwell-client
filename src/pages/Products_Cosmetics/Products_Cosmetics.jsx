
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_Cosmetics = () => {
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
                bgColor="linear-gradient(180deg, #F4DFD6 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="BEAUTY"
                headingText2="BEGINS"
                headingText3="WITH"
                headingText4="TRUE"
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
                bottomTextheading="Improve your body essentials  with HYGWELL's products"
                bottomTextArticle="Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation."
                shortTheFont={true}
                bottomTextBlob="/assets/Images/Blob (9).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/pngegg 1.png"
                bottomTextImgWidth="20"
                bottomTextImgHeight="23"
                bottomTextImgLeft="0"
                bottomTextBlobRight="20"
                borderColor="#B9A792"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (4).png"

            >
            </Products>

        </div>
    );
};

export default Products_Cosmetics;