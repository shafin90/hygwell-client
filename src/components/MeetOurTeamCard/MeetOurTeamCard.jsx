
import "./MeetOurTeamCard.css"

const MeetOurTeamCard = ({ img, name, designation, details }) => {

    return (
        <div className="meetOurTeamCard px-3 px-md-5 px-lg-5     d-flex  flex-column  justify-content-center align-items-center  border  ">
            <img src={img}  alt="" />
            <h1 className="name">{name}</h1>
            <p className="designation">{designation}</p>
            <article className="details text-center text-muted  ">
                {details}
            </article>
            <div className=" card_social_link d-flex  justify-content-between  align-content-center w-50  ">
                <img src="/assets/Images/Icon Box.png" alt="" />
                <img src="/assets/Images/Icon Box (1).png" alt="" />
                <img src="/assets/Images/Icon Box (2).png" alt="" />
            </div>
        </div>
    );
};

export default MeetOurTeamCard;