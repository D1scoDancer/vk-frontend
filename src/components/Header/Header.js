import React, { useEffect, useState } from "react"
import "./Header.css"
import Dropdown from "react-bootstrap/Dropdown"
import axios from "axios"

const Header = ({ currentUser, setCurrentUser }) => {
    const handleUserSelection = async (id) => {
        const address = `http://localhost:8080/users/${id}`

        try {
            const response = await axios.get(address)
            const userData = response.data
            console.log("User data:", userData)
            setCurrentUser(userData)
        } catch (error) {
            console.error("Error fetching user data:", error)
            throw error
        }
    }

    return (
        <header>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Выбрать пользователя
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleUserSelection(1)}>
                        user_1
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleUserSelection(2)}>
                        user_2
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleUserSelection(3)}>
                        user_3
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="current_user">
                {currentUser.lastName} {currentUser.firstName}
            </div>
        </header>
    )
}

export default Header
