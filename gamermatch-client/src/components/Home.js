import React, {useEffect, useContext} from 'react'
import UserContext from '../context/UserContext'
import {useHistory} from 'react-router-dom'

//this page will detect if you arent logged in and direct you to log in or register 
//in order to enter the site 
//cant browse site without creating account 
function Home() {

//context to find if youre logged in
    const { userData } = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        if (!userData.user) history.push('/profile'); //if user data is not found (if user is not logged in redirect to /profile)
    });
    return (
        <div classname="console">
            
        </div>
    )
}

export default Home
