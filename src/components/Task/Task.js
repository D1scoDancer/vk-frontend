import React, { useState, useEffect } from "react"
import "./Task.css"
import { Button } from "react-bootstrap"
import axios from "axios"

const Task = ({ task, currentUser, alreadyPassed }) => {
    const [passed, setPassed] = useState(alreadyPassed)

    const handleSubmit = async () => {
        const apiUrl = "http://localhost:8080/passed-tasks"

        const data = {
            user: currentUser,
            task: task,
        }

        try {
            const response = await axios.post(apiUrl, data)
            console.log("Response:", response.data)
            setPassed(true)
        } catch (error) {
            console.error("Error:", error.message)
            throw error
        }
    }

    return (
        <tr>
            <td>{task.type}</td>
            <td>{task.name}</td>
            <td>{task.short_description}</td>
            <td>
                <Button onClick={handleSubmit} disabled={passed}>
                    Пройти
                </Button>
            </td>
        </tr>
    )
}

export default Task
