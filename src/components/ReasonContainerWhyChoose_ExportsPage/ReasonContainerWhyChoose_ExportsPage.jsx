import ReasonOfWhyChoose_ExportsPage from "../ReasonOfWhyChoose_ExportsPage/ReasonOfWhyChoose_ExportsPage";
import "./ReasonContainerWhyChoose_ExportsPage.css"

const ReasonContainerWhyChoose_ExportsPage = () => {
    return (
        <div className="reasonContainerWhyChoose_ExportsPage mx-auto ">
            <ReasonOfWhyChoose_ExportsPage
                reason="Safe Package"
                img="/assets/Images/Icon.png"
            ></ReasonOfWhyChoose_ExportsPage>

            <ReasonOfWhyChoose_ExportsPage
            reason="Global Tracking"
            img="/assets/Images/Background.png"
            ></ReasonOfWhyChoose_ExportsPage>
            
            <ReasonOfWhyChoose_ExportsPage
            reason="In Time Delivery"
            img="/assets/Images/Icon (1).png"
            ></ReasonOfWhyChoose_ExportsPage>

            <ReasonOfWhyChoose_ExportsPage
            reason="Transparant Pricing"
            img="/assets/Images/Background (1).png"
            left="1.5vw"
            ></ReasonOfWhyChoose_ExportsPage>
            
            <ReasonOfWhyChoose_ExportsPage
            reason="Ship Everyware"
            img="/assets/Images/Background (4).png"
            ></ReasonOfWhyChoose_ExportsPage>
            
            <ReasonOfWhyChoose_ExportsPage
            reason="24/7 Support"
            img="/assets/Images/Icon (2).png"
            left="-0.6vw"
            ></ReasonOfWhyChoose_ExportsPage>
        </div>
    );
};

export default ReasonContainerWhyChoose_ExportsPage;