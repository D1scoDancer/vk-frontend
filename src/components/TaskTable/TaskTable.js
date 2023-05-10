import React, { useState, useEffect } from "react"
import "./TaskTable.css"
import { Table } from "react-bootstrap"
import Task from "../Task/Task"
import axios from "axios"

const TaskTable = ({ currentUser, setCurrentUser }) => {
    const [tasks, setTasks] = useState([])

    const getAllTasks = async () => {
        const apiUrl = "http://localhost:8080/tasks"

        try {
            const response = await axios.get(apiUrl)
            setTasks(response.data)
        } catch (error) {
            console.error("Error:", error.message)
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
                            task={task}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TaskTable
