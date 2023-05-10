import React, { useState, useEffect } from "react"
import "./Task.css"
import { Button } from "react-bootstrap"
import axios from "axios"

const Task = ({ task, currentUser }) => {
    const [passed, setPassed] = useState(false)

    const requestExists = async () => {
        const apiUrl = `http://localhost:8080/passed-tasks/exists?userId=${currentUser.id}&taskId=${task.id}`

        try {
            const response = await axios.get(apiUrl)
            setPassed(response.data)
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    const handleSubmit = async () => {
        const apiUrl = "http://localhost:8080/passed-tasks"
        const data = {
            user: currentUser,
            task: task,
        }
        try {
            const response = await axios.post(apiUrl, data)
            setPassed(true)
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    useEffect(() => {
        requestExists()
    }, [currentUser])

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
