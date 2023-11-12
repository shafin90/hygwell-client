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
                rightSideImg="/assets/Images/Group 1171282607.png"
            ></BackgroundImageContainer>

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
                firstProductImg="/assets/Images/Veterinary (5).png"
                secondProductImg="/assets/Images/Nutraceuticals (5).png"
                thirdProductImg="/assets/Images/Nutraceuticals (5).png"
                bottomTextheading= "Your fragrance is your message your scented slogan."
                bottomTextArticle="The beauty of fragrance is that
                it speaks to your heart, … and hopefully
                someone else's."
            
                bottomTextBlob="/assets/Images/Blob (4).png"
                bottomTextBlobWidth="22.58"
                bottomTextBlobHeight="32.606944444444444"
                bottomTextImg="../../../public/assets/Images/Daco_4503636 1.png"
                bottomTextImgWidth="16"
                bottomTextImgHeight="23" 
                bottomTextImgLeft="0"
                bottomTextBlobRight="16"
                borderColor="#5FD788"
                detailBoxBGIMG="../../../public/assets/Images/Group 1171282628 (2).png"                               
            >                
            </Products>

        </div>
    );
};

export default Products_Fragrance;