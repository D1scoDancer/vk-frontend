import React from "react"
import "./Task.css"
import { Button } from "react-bootstrap"

const Task = ({ type, name, short_description }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{name}</td>
            <td>{short_description}</td>
            <td>
                <Button>Пройти</Button>
            </td>
        </tr>
    )
}

export default Task
