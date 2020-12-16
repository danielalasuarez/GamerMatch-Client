import React from 'react';
import '../style/header.css';
import PersonIcon from '@material-ui/icons/Person';
//makes the icon into buttons!!!!
import IconButton from '@material-ui/core/IconButton';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ForumIcon from "@material-ui/icons/Forum";
//for the Link used for the chat button
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className= 'header'>
            
            <Link to='/profile'>
            <IconButton> 
            <PersonIcon fontSize='large' className='header__icon' /> 
            </IconButton>
            </Link>

{/* using link to make gamer logo alwasy go to home page */}
            <Link to='/'>
                <SportsEsportsIcon fontSize='large' className='header__logo'/>
           </Link>
{/* here we will be using <Link> and use prop to="chats" from react router dom to trigger the /chat route when the chat button is clicked */}
           <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
           </Link>
        </div>
    )
}


export default Header

  