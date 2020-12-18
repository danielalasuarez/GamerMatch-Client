import React, { useState, useContext} from 'react'
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom"
import UserContext from '../../context/UserContext';
import axios from '../../axios'
import Errors from './Errors'

function Login() {
//store the values from each input field in the state 
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[error, setError] = useState();

//enable the context we imported 
       const {setUserData} = useContext(UserContext);

//enable the histroy
       const history = useHistory();

        //function that will submit our form
    const submit = async (event) => {
        try {
        event.preventDefault(); //to prevent reloading and emptying out before it is sent to back
        const loginUser = {email, password}; //grabbing the state which is what the user inputted

    //user is created now below we will log in the user 
        const loginResponse = await axios.post("/profile/login",loginUser);//the only data we need to log in is email and password so we can use loginUser
        //this gives us a response w a token and userData 
        //below we will set the context and get the data
    setUserData({
        token: loginResponse.data.token, // the token in the user data is the loginresponse.data.token(this .token is refering to the token in the backend )
        user: loginResponse.data.user,
    });
    //this will set the token to the local storage for later use 
    localStorage.setItem("auth-token", loginResponse.data.token);
    history.push("/"); //redirect to gamermatch to start swiping
            }  catch(err) {
                //if err.response.msg.data exists in backend set the error state setError
                err.response.data.msg && setError(err.response.data.msg); //both sides have to be true to go on
            }
    }; //logged in!!!! 

    return (
        <div>
            <h1 className="title">LOG IN</h1>

            {error && (
            <Errors message={error} clearError={() => setError(undefined) } />
            )} 
    <div className="wrapper">
            <form onSubmit={submit}>
        {/* email */}
            <label htmlFor="login__email">Email</label>
            <input 
            id="login__emai" 
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            />
        {/* password */}
            <label htmlFor="login__password">Password</label>
            <input 
            id="login__password" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            />

        {/* submit  */}
            <input className="btn" type="submit" value="Log In" />
            </form>
            </div>

            <Link to='/profile'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Login
