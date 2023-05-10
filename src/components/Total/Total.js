import React from "react"
import "./Total.css"

const Total = (props) => {
    return (
        <div className="circle">
            <div>Total</div>
            <span className="number">{props.number}</span>
        </div>
    )
}

export default Total
