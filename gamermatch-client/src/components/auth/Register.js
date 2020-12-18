import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom"
import Errors from './Errors'
import "../../style/register.css"
import axios from '../../axios'

//this form will register the user in the DB 
// then automatically log the user in upon registering 
//then redirect to the homepage 

function Register() {
//store the values from each input field in the state 

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[imgUrl, setImgUrl] = useState();
    const[killDeathRatio, setKillDeathRatio] = useState();
    const[gameHighlights, setGameHighlights] = useState();
    const[error, setError] = useState();

    //enable the context we imported 
    const {setUserData} = useContext(UserContext);

    //enable the histroy
    const history = useHistory();

    //function that will submit our form
    const submit = async (event) => {
        try {
        event.preventDefault(); //to prevent reloading and emptying out before it is sent to back
        const newUser = {name, email, password, imgUrl, killDeathRatio, gameHighlights}; //grabbing the state which is what the user inputted
        await axios.post("/profile/register", newUser); //newUser is the updated states and the data we will post tp /profile/register
    //user is created now below we will log in the user 
    const loginResponse = await axios.post("/profile/login",{ //the only data we need to log in is email and password so we will make an object what only grabs those two so we only send those two to the back 
        email, 
        password,
    }); //this gives us a response w a token and userData 
    //this will set the context
    setUserData({
        token: loginResponse.data.token, // the token in the user data is the loginresponse.data.token(this .token is refering to the token in the backend )
        user: loginResponse.data.user,
    });
    //this will set the token to the local storage for later use 
    localStorage.setItem("auth-token", loginResponse.data.token);
    history.push("/"); //redirect to home 
    } //logged in!!!! 
    catch(err) {
        //if err.response.msg.data exists in backend set the error state setError
        err.response.data.msg && setError(err.response.data.msg); //both sides have to be true to go on
    }
    
}


    return (
        <div>
            <h1 className="title">SIGN UP</h1>
            {/* if there is an error in our state above  */}
            {/* create the Error component where the message (message written in the error component)  */}
            {/* is equal to the error state  */}
            {/* then run the function that sets the error state to undefined (clears it )  */}
            {error && (
            <Errors message={error} clearError={() => setError(undefined) } />
            )} 
            <div className="wrapper">
                
        <form onSubmit={submit}>
           
        {/* name  */}
            <label htmlFor="register__gamerTag">Gamer Tag</label> 
            <input 
            id="register__gamerTag" 
            type="text" 
            onChange={(e) => setName(e.target.value)} //on change changes the state of name 
            />
        {/* email */}
            <label htmlFor="register__email">Email</label>
            <input 
            id="register__emai" 
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            />
        {/* password */}
            <label htmlFor="register__password">Password</label>
            <input 
            id="register__password" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            />
        {/* imgUrl */}
            <label htmlFor="register__imgUrl">Profile Picture</label>
            <input 
            id="register__imgUrl" 
            type="text" 
            onChange={(e) => setImgUrl(e.target.value)}
            />
        {/* killDeathRatio  */}
            <label htmlFor="register__killDeathRatio">Kill Death Ratio</label>
            <input 
            id="register__killDeathRatio" 
            type="text" 
            onChange={(e) => setKillDeathRatio(e.target.value)}
            />
        {/* gameHighlights */}
            <label htmlFor="register__gameHighlights">Game Highlights</label>
            <input 
            id="gameHighlights" 
            type="text" 
            onChange={(e) => setGameHighlights(e.target.value)}
            />
            
        {/* submit  */}
            <input className="btn" type="submit" value="Register" />

        </form>
        

        </div>





            <Link to='/profile'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Register
