import React from "react"
import "./Stats.css"
import Total from "../Total/Total"
import Stat from "../Stat/Stat"
import { Table } from "react-bootstrap"

const Stats = () => {
    return (
        <div className="stats">
            <div className="total">
                <Total number={-1} />
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
                    <Stat type={"CTF"} />
                    <Stat type={"Reading"} />
                    <Stat type={"Test"} />
                </tbody>
            </Table>
        </div>
    )
}

export default Stats
