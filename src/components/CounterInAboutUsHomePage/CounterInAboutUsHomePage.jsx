import { useEffect, useState, useRef } from 'react';
import './CounterInAboutUsHomePage.css';

const CounterInAboutUsHomePage = ({ category, number }) => {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // When 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    setCounter(0); // Reset counter if not in view
                }
            });
        }, options);

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [counterRef]);

    useEffect(() => {
        if (counter < number) {
            const timeout = setTimeout(() => {
                const newCounter = counter + 1;
                setCounter(newCounter);
            }, 80);

            return () => clearTimeout(timeout);
        }
    }, [counter, number]);

    return (
        <div ref={counterRef} className='d-flex flex-column justify-content-between align-items-center'>
            <h1 style={{ transition: '0.8s' }} className='h1 fw-bold display-5'>
                {counter}+
            </h1>
            <span style={{ height: '12px' }} className='w-100 bg-success rounded-4'></span>
            <p className='fs-5'>{category}</p>
        </div>
    );
};

export default CounterInAboutUsHomePage;
