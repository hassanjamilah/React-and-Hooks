import {useState} from 'react'

export function useInput(initValue){
    const [value, setValue] = useState(initValue);

    return [
        {value, onChange: (e) =>setValue(e.target.value)},
        () => setValue(initValue)
    ]
}