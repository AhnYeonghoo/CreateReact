import React, { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <p className="number">{count} <span className='total'>/{props.total}</span></p>
            <button 
                className="button" 
                onClick={() => {
                    setCount((prevCount) => prevCount+1);    
                    props.onClick();
            }}
            >
                Add +
                </button>
        </div>
    );
}