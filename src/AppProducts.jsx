import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';


export default function AppProducts() {
    const [showProcuts, setShowProducts] = useState(true);

    return (
        <div>
            {showProcuts && <Products />}
            <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
        </div>
    )
}