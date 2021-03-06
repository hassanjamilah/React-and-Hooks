import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';





function App (){
    const [status, setStatus ] = useState("Not Delivered");
    console.log('usestate', status);

    const setMyState = (name) => {
        const x  = () => setStatus(name)
    }


    const myfunc = () => {
        return 'Hassan Jamila'
    }
    return(

        <div>
            <h1>The package is: {status}</h1>
            <button onClick={() => setStatus(myfunc())
            }>Delivered</button>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

