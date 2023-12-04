import { Fade } from 'react-awesome-reveal';
import BoxContent_ExportsPage from '../BoxContent_ExportsPage/BoxContent_ExportsPage';
import './BoxContentContainer_ExportPage.css'

const BoxContentContainer_ExportPage = () => {
    return (
        <div className='boxContentContainer_ExportPage my-5  d-flex flex-column flex-md-row  flex-lg-row  justify-content-between  align-items-center '>
            <Fade direction='left'>
                <BoxContent_ExportsPage
                    img='/assets/Images/image 1.jpg'
                    heading="Reegulatory Compliance"
                ></BoxContent_ExportsPage>
            </Fade>

            <Fade direction='right'>
                <BoxContent_ExportsPage
                    img='/assets/Images/image 4.jpg'
                    heading="Wide product range"
                ></BoxContent_ExportsPage>
            </Fade>
        </div>
    );
};

export default BoxContentContainer_ExportPage;