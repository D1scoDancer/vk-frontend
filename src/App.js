import React, { useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Account from "./components/Account/Account"
import Stats from "./components/Stats/Stats"
import TaskTable from "./components/TaskTable/TaskTable"

function App() {
    const [currentUser, setCurrentUser] = useState({
        id: -1,
        firstName: "Unknown",
        lastName: "Unknown",
    })

    return (
        <div className="main">
            <div className="header">
                <Header
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                />
            </div>
            <div className="central">
                <div>
                    <Account currentUser={currentUser} />
                </div>
                <div>
                    <Stats />
                </div>
            </div>
            <div className="tasktable">
                <TaskTable />
            </div>
        </div>
    )
}

export default App
