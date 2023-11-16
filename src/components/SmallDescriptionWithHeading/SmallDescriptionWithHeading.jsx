import { useEffect, useState } from "react";

const SmallDescriptionWithHeading = ({ headingClass, heading, article }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth) // Contains the width of screen

    // Use the useEffect hook to update the screenWidth state whenever the window size changes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div>
            <h1 className={headingClass}>
                {heading}
            </h1>

            <article className=" text-muted " >
                {article}
            </article>
        </div>
    );
};

export default SmallDescriptionWithHeading;