import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count)
    let feedback = count > 10 ? "It's higher than 10!" : "Keep counting..."
    return (
        <div>
            { Count(count) }
            { Button(setCount,count,'inc',1) }
            { Button(setCount,count,'dec',2) }
            <div>{feedback}</div>
        </div>
    )
}

const Count = (count) => {
    return (
        <div className="Counter">{count}</div>
    )
}

const Button = (setCount, count, operation, step) => {
    const changeCount = () => {
        return operation === 'inc' ? setCount(count + step) : 
            (count - step <= 0 ? setCount(0) : setCount(count - step))
    }

    let buttonName = operation === 'inc' ? `Add ${step}` : `Subtract ${step}`
    return (
        <button className="Counter-btn" onClick={changeCount}>{buttonName}</button>
    )
}

export default Counter;