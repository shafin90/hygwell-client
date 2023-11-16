//  This is box content of Exports page
//  It takes place after Export Credo section

import './BoxContent_ExportsPage.css'

const BoxContent_ExportsPage = ({img, heading}) => {
    return (
        <div className='boxContent_ExportsPage z-3 bg-white  position-relative  mb-4  mb-md-0  mb-lg-0  shadow  d-flex  flex-column  justify-content-center  align-items-center '>
            <img src={img} alt="" />
            <h3>{heading}</h3>
            <ul>
                <li>Write something</li>
                <li>Write something</li>
                <li>Write something</li>
                <li>Write something</li>
            </ul>
        </div>
    );
};

export default BoxContent_ExportsPage;