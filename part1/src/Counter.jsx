import { useState } from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    const setToValue = (value) => () => {
        setCounter(value)
    }

    // setTimeout(() => {
    //     setCounter(counter + 1)
    // }, 1000)

    return (
        <div>
            <button onClick={setToValue(counter + 1)}>plus</button>
            {counter} Count
            <button onClick={setToValue(counter - 1)}>minus</button>
            <div>
                
            </div>
        </div>
    )
}