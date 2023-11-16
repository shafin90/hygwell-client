import { useState } from "react";


const SmallDescriptionWithHeading = ({ fontWeight, fontFamily, textAlign, heading, article, fontSizeOfHeading, fontSizeOfArticle }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth) // Contains the width of screen


    const style = {
        // width: width,
        textAlign: textAlign,
        fontFamily: fontFamily
    }

    return (
        <div style={style}>
            <h1 className={screenWidth < 575 && "mb-2"}
                style={{
                    fontWeight: `${screenWidth < 575 ? "600" : fontWeight}`,
                    fontSize: `${screenWidth < 575 ? "9vw" : fontSizeOfHeading}`
                }}>
                {heading}
            </h1>

            <article
                style={{
                    fontSize: `${screenWidth < 575 ? "4vw" : fontSizeOfArticle}`,
                    fontFamily: fontFamily
                }}>
                {article}
            </article>
        </div>
    );
};

export default SmallDescriptionWithHeading;