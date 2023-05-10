import React, { useEffect, useState } from "react"
import "./Header.css"
import Dropdown from "react-bootstrap/Dropdown"

const Header = () => {
    return (
        <header>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Выбрать пользователя
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>user_1</Dropdown.Item>
                    <Dropdown.Item>user_2</Dropdown.Item>
                    <Dropdown.Item>user_3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="current_user">user_1</div>
        </header>
    )
}

export default Header
