import React, { useState, useEffect } from "react"
import "./Stat.css"
import axios from "axios"

const Stat = ({ type, currentUser }) => {
    const [done, setDone] = useState(0)
    const [total, setTotal] = useState(0)

    const countDone = async () => {
        const apiUrl = `http://localhost:8080/passed-tasks/byUserType?type=${type}&userId=${currentUser.id}`
        try {
            const response = await axios.get(apiUrl)
            console.log("Response countDone:", response.data)
            setDone(response.data.length)
        } catch (error) {
            console.error("Error:", error.message)
            throw error
        }
    }

    const countTotal = async () => {
        const apiUrl = "http://localhost:8080/tasks/byType?type=" + type

        try {
            const response = await axios.get(apiUrl)
            console.log("Response:", response.data)
            setTotal(response.data.length)
        } catch (error) {
            console.error("Error:", error.message)
            throw error
        }
    }

    const countPercentile = () => {
        return -1
    }

    useEffect(() => {
        countTotal()
        countDone()
    }, [currentUser])

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
