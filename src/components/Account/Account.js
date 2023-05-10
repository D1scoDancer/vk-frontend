import React from "react"
import "./Account.css"
import { Image } from "react-bootstrap"

const Account = ({ currentUser }) => {
    return (
        <div className="acc">
            <Image
                src="profile.png"
                rounded
                style={{ width: "100px", height: "100px" }}
            />
            <div className="username">
                {currentUser.lastName} {currentUser.firstName}
            </div>
        </div>
    )
}

export default Account
