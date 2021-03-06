import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useInput} from "./useInput";
import {useFetch} from "./useFetch";




function App({login}) {
    const {loading,data, error} = useFetch(`https://api.github.com/users/${login}`);
    if (loading) return <h1>Loading...</h1>;
    if (error) return (<pre>{JSON.stringify(error,null, 2)}</pre>);
    return (
     <div>
         <pre>{JSON.stringify(data, null, 2)}</pre>
     </div>
    )




}

ReactDOM.render(
    <React.StrictMode>
        <App login='hassanjamilahj@gmail.com'/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

