import React from 'react'
import MatchedChatPreview from './MatchedChatPreview'
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
           
        </div>
    )
}

export default ChatsScreen
