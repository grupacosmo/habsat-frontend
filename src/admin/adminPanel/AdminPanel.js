import React from "react";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";


const AdminPanel = () => {

    const[isLoggedIn, setLoggedIn] = useState(false);


    if(!isLoggedIn) {
        return <LoginPage />
    }

    return (
        <div>
            <h1>Admin panel</h1>
        </div>
    )
}


export default AdminPanel;