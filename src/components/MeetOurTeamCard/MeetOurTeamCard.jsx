
import "./MeetOurTeamCard.css"

const MeetOurTeamCard = ({ img, name, designation, details }) => {

    return (
        <div className="meetOurTeamCard d-flex  flex-column  justify-content-center align-items-center  shadow-lg   ">
            <img src={img}  alt="" />
            <h1 className="name">{name}</h1>
            <p className="designation">{designation}</p>
            <article className="details text-center ">
                {details}
            </article>
            <div className=" card_social_link d-flex  justify-content-between  align-content-center w-25  ">
                <img src="../../../public/assets/Images/Icon Box.png" alt="" />
                <img src="../../../public/assets/Images/Icon Box (1).png" alt="" />
                <img src="../../../public/assets/Images/Icon Box (2).png" alt="" />
            </div>
        </div>
    );
};

export default MeetOurTeamCard;