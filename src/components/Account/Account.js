import React from "react"
import "./Account.css"
import { Image } from "react-bootstrap"

const Account = () => {
    return (
        <div className="acc">
            <Image
                src="profile.png"
                rounded
                style={{ width: "100px", height: "100px" }}
            />
            <div className="username">user_1</div>
        </div>
    )
}

export default Account
