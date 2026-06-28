import { useState } from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    // setTimeout(() => {
    //     setCounter(counter + 1)
    // }, 1000)

    return (
        <div>
            <button onClick={()=>setCounter(counter + 1)}>plus</button>
            {counter}
            <button onClick={()=>setCounter(counter - 1)}>minus</button>
        </div>
    )
}