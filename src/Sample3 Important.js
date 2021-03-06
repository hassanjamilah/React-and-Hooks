import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {FaStar} from "react-icons/all";


const createArray= (length) => [
    ...Array(length)
]

function Star({selected = false, onSelect}){
    return <FaStar color={selected ? 'red':'gray'}
    onClick={onSelect}
    />
}

function StarRating({totalStars =5}){
    const [selectedStars, setSelectedStars] = useState(0);
    return
    <>
    {createArray(totalStars).map((n, i) => (

        <Star key={i} selected={selectedStars > i}
              onSelect={()=>setSelectedStars(i + 1)}/>
    ))}
    <p>selected stars </p>
    </>
}


function App() {

    return (

        <StarRating totalStars={10}/>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

