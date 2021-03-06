import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useInput} from "./useInput";




function App() {

    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

    const submit = (e)=>{

        alert(`${titleProps.value} is like ${colorProps.value}`);
        resetTitle();
        resetColor();
        
    }

    return(
        <form onSubmit={submit}>
            <input {...titleProps} type='text' placeholder='Sound...'/>
            <input {...colorProps} type='color'/>
            <button>ADD</button>
        </form>
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

