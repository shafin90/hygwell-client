import './CounterInAboutUsHomePage.css'

const CounterInAboutUsHomePage = ({ num, category }) => {

    return (
        <div  className=' d-flex flex-column  justify-content-between align-items-center  '>
            <h1 className='counterInAboutUs_heading'>
                {num}
            </h1>

            <img className='counterInAboutUs_img' src="/assets/Images/Rectangle.png" alt="" />
            <p className='counterInAboutUs_para'>{category}</p>
        </div>
    );
};

export default CounterInAboutUsHomePage;