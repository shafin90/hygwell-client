
import "./MeetOurTeamCard.css"

const MeetOurTeamCard = ({ img, name, designation, details }) => {

    return (
        <div className="meetOurTeamCard d-flex  flex-column  justify-content-center align-items-center  shadow-lg ">
            <img src={img}  alt="" />
            <h1 className="name">{name}</h1>
            <p className="designation">{designation}</p>
            <article className="details text-center ">
                {details}
            </article>
        </div>
    );
};

export default MeetOurTeamCard;