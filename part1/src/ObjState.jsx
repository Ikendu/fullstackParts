import { useState } from "react"

export default function ObjState(){
    const [clicks, setClicks] = useState({left: 0, right: 0})
    const [allClicks, setAllClicks] = useState([])

    // const handleLeftClick = ()=>{
    //     const newClicks = {
    //         left: clicks.left + 1, right: clicks.right
    //     }
    //     setClicks(newClicks)
    // }
    // const handleRightClick = ()=>{
    //     const newClicks = {
    //         left: clicks.left, right: clicks.right + 1
    //     }
    //     setClicks(newClicks)
    // }

    // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
    // const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setClicks({...clicks, left: clicks.left + 1})
    }
    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setClicks({...clicks, right: clicks.right + 1})
    }

    return(
        <div>
            <p>Left: {clicks.left}</p>
            <p>Right: {clicks.right}</p>
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            <p>All clicks: {allClicks.join('| |')}</p>
        </div>
    )
}