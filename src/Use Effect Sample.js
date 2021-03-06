import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function App() {
    const [name, setName]  = useState('Jan')


    useEffect(()=>{
        document.title = `Celebrate ${name}`;
    });

    return (

        <section>
            <p>Congratulations {name}</p>
            <button
                onClick={()=>setName("Will")}
                >Change the winner</button>
        </section>
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

