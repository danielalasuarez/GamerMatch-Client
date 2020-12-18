// want to have this componnet access the user so I and useing useContext hook
import React, { useContext } from 'react' 
import UserContext from '../../context/UserContext'
import Login from './Login'
import Register from './Register'
import Home from '../../components/Home'
import { useHistory } from "react-router-dom" //using react hooks again 
import "../../style/profile.css"

function Profile() {
    //userData and setUserData are brought in from app js UserContext.Provider
    //the function below will get userData and setUserData in different variables from UserContext that we provided with the provider on app.js
    const {userData, setUserData} = useContext(UserContext)

    const history = useHistory(); //allows us to interact w history 

    const register = () => {
        history.push('/register')
    } //switch to register route 

    const login = () => {
        history.push('/login')
    } //switch to login route 

    const logout = () => {
        setUserData({ //setting the user data state to undefined will make the user be logged out 
            token:undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", ""); //setting the local auth token to empty will log the user out on local storage 
    }
    return (
        <div>
            <h1>GAMER PROFILE</h1>
            <h1>MAIN PAGE</h1>
            <h3>You must register or be logged in in order to match with a gamer!</h3>
            <Home />
            {userData.user ? (//if user in user data exists (if it is not null of undefined) 
                // above is checking if the user is signed in 
                <button onClick={logout}>LOG OUT</button>  //show logout button 
            ) : (//else (:) display register and log in buttons
//Fragments <> and </> let you retunr multiple elements
                <> 
                <button onClick={register}>REGISTER</button>

                <button onClick={login}>LOG IN</button>
                </>
            )
            }
            
               
            
            
                
            

           
        </div>
    )
}

export default Profile
