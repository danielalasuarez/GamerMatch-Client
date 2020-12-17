import React from 'react'
import Login from './Login'
import Register from './Register'
import { Link } from "react-router-dom"
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom" //using react hooks again 

function Profile() {
    const history = useHistory(); //allows us to interact w history 

    const register = () => {
        history.push('/register')
    } //switch to register route 

    const login = () => {
        history.push('/login')
    } //switch to login route 
    return (
        <div>
            <h1>GAMER PROFILE</h1>
            
                <button onClick={register}>REGISTER</button>
                
            
               
                <button onClick={login}>LOG IN</button>
               
            
                <Link to='/'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large' />
                </IconButton>
            </Link>

           
        </div>
    )
}

export default Profile
