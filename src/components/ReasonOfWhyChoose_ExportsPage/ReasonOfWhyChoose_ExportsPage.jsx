import React, { useState, useEffect } from "react";
import './ReasonOfWhyChoose_ExportsPage.css'

const ReasonOfWhyChoose_ExportsPage = ({reason, img, left}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Use the useEffect hook to update the screenWidth state whenever the window size changes
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const style = {
    position: "relative",
    left: screenWidth < 575 ? "0vw" : left
  };

  return (
    <div style={style} className="reasonOfWhyChoose_ExportsPage d-flex justify-content-start justify-content-md-center justify-content-lg-center align-items-center ">
      <img src={img} alt="" />
      <p className="ms-3">{reason}</p>
    </div>
  );
};

export default ReasonOfWhyChoose_ExportsPage;
