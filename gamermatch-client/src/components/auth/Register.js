import React from 'react'
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom"

function Register() {
    return (
        <div>
            <h1>SIGN UP</h1>

            <Link to='/profile'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Register
