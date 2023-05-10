import React from "react"
import "./Stats.css"
import Total from "../Total/Total"
import Stat from "../Stat/Stat"

const Stats = () => {
    return (
        <div className="stats">
            <div className="total">
                <Total number={10} />
            </div>
            <div className="types">
                <Stat />
                <Stat />
                <Stat />
            </div>
        </div>
    )
}

export default Stats
