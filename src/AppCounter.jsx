import './App.css';
import Counter from './components/Counter';
import React, { useState } from 'react';

export default function AppCounter(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(prev => prev + 1);
  return (
    <div className='container'>
        <div className="banner">
                Total count: {count} {count > 10 ? '불' : '꽃'}
        </div>
        <div className='counters'>
            <Counter total={count} onClick={handleClick}/>
            <Counter total={count} onClick={handleClick}/>
        </div>
    </div>
  );
}


