import React from 'react';
import '../style/header.css'
import PersonIcon from '@material-ui/icons/Person';
//makes the icon into buttons!!!!
import IconButton from '@material-ui/core/IconButton'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className= 'header'>
            
            <IconButton> 
            <PersonIcon fontSize='large' className='header__icon' /> 
            </IconButton>

           <SportsEsportsIcon fontSize='large' className='header__logo'/>

           <IconButton>
           <ForumIcon fontSize='large' className='header__icon'/>
           </IconButton>
        </div>
    )
}


export default Header

  