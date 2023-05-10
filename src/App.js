import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Account from "./components/Account/Account"
import Stats from "./components/Stats/Stats"

function App() {
    return (
        <div className="main">
            <div className="header">
                <Header />
            </div>
            <div className="central">
                <div>
                    <Account />
                </div>
                <div>
                    <Stats />
                </div>
            </div>
            <div className="tasktable">Tasks</div>
        </div>
    )
}

export default App
