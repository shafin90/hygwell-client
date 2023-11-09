

const SmallDescriptionWithHeading = ({ fontWeight, fontFamily, textAlign, heading, article, fontSizeOfHeading, fontSizeOfArticle}) => {
    
    const style={
        // width: width,
        textAlign: textAlign,
        fontFamily: fontFamily
    }
    
    return (
        <div style={style}>
            <h1 style={{fontWeight:fontWeight, fontSize:fontSizeOfHeading}}>
                {heading}
            </h1>

            <article style={{fontSize:fontSizeOfArticle, fontFamily:fontFamily}}>
                {article}
            </article>
        </div>
    );
};

export default SmallDescriptionWithHeading;