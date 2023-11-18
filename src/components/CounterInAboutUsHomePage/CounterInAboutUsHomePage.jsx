import { useEffect, useState } from 'react';
import './CounterInAboutUsHomePage.css'

const CounterInAboutUsHomePage = ({ category, number }) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < number) {
            setTimeout(() => {
                const newCounter = counter + 1;
                setCounter(newCounter)
            }, 50)
        }

    }, [counter,setCounter, number])

    return (
        <div className=' d-flex flex-column  justify-content-between align-items-center  '>
            <h1 className='h1 fw-bold display-5  '>
                +{counter}
            </h1>

            <img className=' w-100 ' src="/assets/Images/Rectangle.png" alt="" />
            <p className=' fs-5 '>{category}</p>
        </div>
    );
};

export default CounterInAboutUsHomePage;