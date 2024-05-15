import React, {useContext} from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <h1>Not logged in!</h1>

    return (
        <h1>Profile : {user.userName}</h1>
    )
}

export default Profile