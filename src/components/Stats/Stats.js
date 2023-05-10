import React from "react"
import "./Stats.css"
import Total from "../Total/Total"
import Stat from "../Stat/Stat"
import { Table } from "react-bootstrap"

const Stats = ({ currentUser }) => {
    return (
        <div className="stats">
            <div className="total">
                <Total currentUser={currentUser} />
            </div>
            <Table striped className="types">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Stat type={"CTF"} currentUser={currentUser} />
                    <Stat type={"Тест"} currentUser={currentUser} />
                    <Stat type={"Чтение"} currentUser={currentUser} />
                </tbody>
            </Table>
        </div>
    )
}

export default Stats
