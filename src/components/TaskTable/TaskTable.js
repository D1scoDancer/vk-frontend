import React, { useState, useEffect } from "react"
import "./TaskTable.css"
import { Table } from "react-bootstrap"
import Task from "../Task/Task"
import axios from "axios"

const TaskTable = () => {
    const [tasks, setTasks] = useState([])

    const getAllTasks = async () => {
        const apiUrl = "http://localhost:8080/tasks"

        try {
            const response = await axios.get(apiUrl)
            console.log("Response:", response.data)
            setTasks(response.data)
        } catch (error) {
            console.error("Error:", error.message)
            throw error
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Тип теста</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            type={task.type}
                            name={task.name}
                            short_description={task.short_description}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TaskTable
