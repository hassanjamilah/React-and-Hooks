import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const initialState = {
    message: 'Hello my message'
};

function reducer(state, action){
    switch (action.type){
        case "yell":
            return{
                message: 'HELL'
            }
        case 'whisper':
            return {
                message: "Execuse me"
            }

    }
}



function App() {




    const [state, dispatch] = useReducer(
        reducer,
        initialState
        );


    return (
        <>
            <p>Message : {state.message}</p>
            <button onClick={()=>dispatch({type:'yell'})}>Click me</button>
            <button onClick={()=>dispatch({type:'whisper'})}>Click me</button>
        </>
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

