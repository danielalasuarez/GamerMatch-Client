import React from 'react'
import MatchedChatPreview from './MatchedChatPreview'
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import "../style/chatsScreen.css"

function ChatsScreen() {
    return (
        <div className="chats">
            <MatchedChatPreview
            name="Dani"
            message="Hey what are you playing rn?"
            timestamp="20 min ago"
            profilePicture="https://i.imgur.com/JNPw9YC.jpg"
            /> 
            <MatchedChatPreview
            name="Dani"
            message="Hey what are you playing rn?"
            timestamp="20 min ago"
            profilePicture="https://i.imgur.com/JNPw9YC.jpg"
            /> 
            <MatchedChatPreview
            name="Dani"
            message="Hey what are you playing rn?"
            timestamp="20 min ago"
            profilePicture="https://i.imgur.com/JNPw9YC.jpg"
            /> 


            <Link to='/'>
                <IconButton className='chats__back__home'>
                    <ArrowBackTwoToneIcon fontSize='large' className="chats__back__home__arrow"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default ChatsScreen
