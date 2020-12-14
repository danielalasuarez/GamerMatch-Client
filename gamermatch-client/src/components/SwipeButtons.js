import React from 'react'
import "../style/swipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
//to make them buttons
import IconButton from '@material-ui/core/IconButton'



function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            
            <IconButton className='swipeButtons__replay'>
                <ReplayIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons__star'>
                <StarRateIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize='large' />
            </IconButton>

            <IconButton className='swipeButtons__bolt'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
