import { Fade, Bounce, Roll, Zoom, Slide } from "react-awesome-reveal";


const SmallDescriptionWithHeading = ({ headingClass, articleClass, heading, article }) => {

    return (
        <div>


            <h1 className={headingClass}>
                <Fade duration={1500}>
                    {heading}
                </Fade>
            </h1>


            <article className={articleClass ? "text-muted position-relative z-2 text-center pb-4   px-4 " : "text-muted position-relative z-2"} >
                <Fade duration={1500}>
                    {article}
                </Fade>
            </article>
        </div>
    );
};

export default SmallDescriptionWithHeading;