import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function App() {

    const sound = useRef();
    const color = useRef();

    const submit = (e)=>{
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} is like ${colorVal}`)
    }

    return(
        <form onSubmit={submit}>
            <input ref={sound} type='text' placeholder='Sound...'/>
            <input ref={color} type='color'/>
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

