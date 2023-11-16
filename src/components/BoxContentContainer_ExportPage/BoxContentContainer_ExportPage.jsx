import BoxContent_ExportsPage from '../BoxContent_ExportsPage/BoxContent_ExportsPage';
import './BoxContentContainer_ExportPage.css'

const BoxContentContainer_ExportPage = () => {
    return (
        <div className='boxContentContainer_ExportPage my-5  d-flex flex-column flex-md-row  flex-lg-row  justify-content-between  align-items-center '>
            <BoxContent_ExportsPage
            img='/assets/Images/image 1.png'
            heading="Reegulatory Compliance"
            ></BoxContent_ExportsPage>
            
            <BoxContent_ExportsPage
            img='/assets/Images/image 4.png'
            heading="Wide product range"
            ></BoxContent_ExportsPage>
        </div>
    );
};

export default BoxContentContainer_ExportPage;