import React from 'react'
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom"

function Login() {
    return (
        <div>
            <h1>LOG IN</h1>

            <Link to='/profile'>
                <IconButton className='back'>
                    <ArrowBackTwoToneIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Login
