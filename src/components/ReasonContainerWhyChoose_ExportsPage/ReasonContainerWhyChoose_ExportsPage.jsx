import { Hinge, JackInTheBox, Zoom } from "react-awesome-reveal";
import ReasonOfWhyChoose_ExportsPage from "../ReasonOfWhyChoose_ExportsPage/ReasonOfWhyChoose_ExportsPage";
import "./ReasonContainerWhyChoose_ExportsPage.css"

const ReasonContainerWhyChoose_ExportsPage = () => {
    return (
        <div className="reasonContainerWhyChoose_ExportsPage mx-auto ">

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="Safe Package"
                    img="/assets/Images/Background.jpg"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="Global Tracking"
                    img="/assets/Images/Background (1).jpg"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="In Time Delivery"
                    img="/assets/Images/Icon.jpg"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="Transparant Pricing"
                    img="/assets/Images/Icon (1).jpg"
                    left="1.5vw"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="Ship Everyware"
                    img="/assets/Images/Background (2).jpg"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>

            <Zoom>
                <ReasonOfWhyChoose_ExportsPage
                    reason="24/7 Support"
                    img="/assets/Images/Background (3).jpg"
                    left="-0.6vw"
                ></ReasonOfWhyChoose_ExportsPage>
            </Zoom>
        </div>
    );
};

export default ReasonContainerWhyChoose_ExportsPage;