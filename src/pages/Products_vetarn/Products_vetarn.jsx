import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Prodcuts/Products";


const Products_vetarn = () => {
    return (
        <div>
            <Banner
                heading="Products"
                article="HYGWELL is your trusted partner for high-quality pharmaceuticals solutions. We specialize in providing the best healthcare services for you with a dedication to excellence, customer satisfaction, and constant innovation."
                fontweightOfArticle="400"
            ></Banner>

            <BackgroundImageContainer
                rightSideImg="/assets/Images/Group 1171282607.png"
            ></BackgroundImageContainer>

            <Products
                bgColor="linear-gradient(180deg, rgba(222, 157, 165, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
                headingText1="NUTRATION"
                headingText2="FOR"
                headingText3="YOUR"
                headingText4="WELLNESS"
                headingTextColor1="#C89595"
                headingTextColor2="#365F42"
                headingTextColor3="#365F42"
                headingTextColor4="#C89595"
                firstProductImg="/assets/Images/Veterinary (2).png"
                secondProductImg="/assets/Images/Nutraceuticals (2).png"
                thirdProductImg="/assets/Images/Nutraceuticals (2).png"
                bottomTextheading= "Pet Health Mastery,Your Furry Friend's Sanctuary."
                bottomTextArticle="our Beloved Companion,Our Compassionate Care,Nurturing Lifelong Wellness."
                bottomTextBlob="/assets/Images/Blob (2).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="/assets/Images/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlNl9mZW1hbGVfaHVnZ2luZ19hbmRfa2lzc2luZ19oZXJfcHVwcHlfYmFzZW5qaV9kb183MzIyZmU2Ny0yMGFlLTRhMzItOGRh.png"
                bottomTextImgWidth="20"
                bottomTextImgHeight="23" 
                bottomTextImgLeft="0"
                bottomTextBlobRight="20"    
                borderColor="#DE9DA570"
                detailBoxBGIMG="/assets/Images/Group 1171282628 (2).png"             
            >                
            </Products>

        </div>
    );
};

export default Products_vetarn;