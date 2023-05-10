import React, { useState } from "react"
import "./Stat.css"

const Stat = ({ type }) => {
    const [done, setDone] = useState(-1)
    const [total, setTotal] = useState(-1)

    const countPercentile = () => {
        return -1
    }

    return (
        <tr>
            <td>{type}</td>
            <td>
                {done}/{total}
            </td>
            <td>Лучше {countPercentile()}%</td>
        </tr>
    )
}

export default Stat
