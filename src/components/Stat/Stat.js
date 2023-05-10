import React, { useState, useEffect } from "react"
import "./Stat.css"
import axios from "axios"

const Stat = ({ type, currentUser }) => {
    const [done, setDone] = useState(0)
    const [total, setTotal] = useState(0)
    const [percentile, setPercentile] = useState(0)

    const countDone = async () => {
        const apiUrl = `http://localhost:8080/passed-tasks/byUserType?type=${type}&userId=${currentUser.id}`
        try {
            const response = await axios.get(apiUrl)
            setDone(response.data.length)
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    const countTotal = async () => {
        const apiUrl = "http://localhost:8080/tasks/byType?type=" + type

        try {
            const response = await axios.get(apiUrl)
            setTotal(response.data.length)
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    const countPercentile = async () => {
        const apiUrl = "http://localhost:8080/passed-tasks/better?type=" + type

        try {
            const response = await axios.get(apiUrl)
            console.log("perc:", response.data)

            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i][0] == currentUser.id) {
                    setPercentile((i / (response.data.length - 1.0)) * 100.0)
                }
            }
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    useEffect(() => {
        countTotal()
        countDone()
        countPercentile()
    }, [currentUser])

    return (
        <tr>
            <td>{type}</td>
            <td>
                {done}/{total}
            </td>
            <td>Лучше {percentile}%</td>
        </tr>
    )
}

export default Stat
