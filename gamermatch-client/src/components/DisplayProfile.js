import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import UserContext from '../context/UserContext'
import { Link } from "react-router-dom"
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import axios from '../axios'

function DisplayProfile() {
    const {userData, setUserData} = useContext(UserContext)
    const history = useHistory(); //allows us to interact w history 

    const [profile, setProfile] = useState([]);

    const backToMain = () => {
        history.push('/profile')
    } //switch to profile route 
    
    const logout = () => {
        setUserData({ //setting the user data state to undefined will make the user be logged out 
            token:undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", ""); //setting the local auth token to empty will log the user out on local storage 
    }

    // const handleDelete = async (event) => {
    //     const currentUser = userData.user.id
    //    console.log(userData.user.id)
    //     await axios.delete("/profile/delete", currentUser);
       
    //     history.push("/profile"); //redirect
    // }
    
    // ////===========================================================
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get("/profile/login")
    //         setProfile(request.data);
    //         console.log(request.data)
    //     }
    //     fetchData();
    // }, [])
   
    //  ////===========================================================
    
    
    
    return (
        <div>
            profile will be displayed here 

            {
            userData.user ? (//if user in user data exists (if it is not null of undefined) 
                // above is checking if the user is signed in 
                <button onClick={logout}>LOG OUT</button>  //show logout button 
            ) : (

            backToMain()
            )
            }
        {/* <button onClick={handleDelete}>DELETE ACCOUNT</button> */}

        {/* {profile.map((profile) => (
            <h1>{profile.name}</h1>
            ))} */}


            <Link to='/'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large' />
                </IconButton>
            </Link>















        </div>
    )
}

export default DisplayProfile
