import { useEffect, useState } from 'react';
import './CounterInAboutUsHomePage.css'

const CounterInAboutUsHomePage = ({ category, number }) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < number) {
            setTimeout(() => {
                const newCounter = counter + 1;
                setCounter(newCounter)
            }, 80)
        }

    }, [counter,setCounter, number])

    return (
        <div className=' d-flex flex-column  justify-content-between align-items-center  '>
            <h1 style={{transition:"0.8s"}} className='h1 fw-bold display-5'>
                {counter}+
            </h1>
            <span style={{height:"12px"}} className=' w-100 bg-success rounded-4 '></span>
            <p className=' fs-5 '>{category}</p>
        </div>
    );
};

export default CounterInAboutUsHomePage;