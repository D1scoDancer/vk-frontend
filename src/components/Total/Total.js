import React, { useState, useEffect } from "react"
import "./Total.css"
import axios from "axios"

const Total = ({ currentUser }) => {
    const [total, setTotal] = useState(0)

    const requestTotal = async () => {
        const apiUrl = `http://localhost:8080/passed-tasks/byUser?userId=${currentUser.id}`

        try {
            const response = await axios.get(apiUrl)
            console.log("Response countDone:", response.data)
            setTotal(response.data.length)
        } catch (error) {
            console.error("Error:", error.message)
            throw error
        }
    }

    useEffect(() => {
        requestTotal()
    }, [currentUser])

    return (
        <div className="circle">
            <div>Всего</div>
            <span className="number">{total}</span>
        </div>
    )
}

export default Total
