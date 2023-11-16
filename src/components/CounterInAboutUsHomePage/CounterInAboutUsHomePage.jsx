import './CounterInAboutUsHomePage.css'

const CounterInAboutUsHomePage = ({ num, category }) => {

    return (
        <div  className=' d-flex flex-column  justify-content-between align-items-center  '>
            <h1 className='h1 fw-bold display-5  '>
                {num}
            </h1>

            <img className=' w-100 ' src="/assets/Images/Rectangle.png" alt="" />
            <p className=' fs-5 '>{category}</p>
        </div>
    );
};

export default CounterInAboutUsHomePage;