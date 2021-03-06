import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function App() {

    const [sound, setSound] = useState('');
    const [color, setColor] = useState('#000000');

    // const sound = useRef();
    // const color = useRef();

    const submit = (e)=>{
        e.preventDefault();

        setSound('');
        setColor('000000');
        alert(`${sound} is like ${color}`)
    }

    return(
        <form onSubmit={submit}>
            <input value={sound} type='text' placeholder='Sound...'
            onChange={(e)=> setSound(e.target.value)}
            />
            <input value={color} type='color'
            oncancel={(e)=>setColor(e.target.value)}
            />
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

