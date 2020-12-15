import React from 'react'
//using material-ui to styule the preview rows
//Avatar is for the circle profile pic
import Avatar from '@material-ui/core/Avatar'
import "../style/MatchedChatPreview.css"

function MatchedChatPreview({name, message, timestamp, profilePicture}) {
    return (
        <div className="chat__preview">
            {/* this says that if there is no profile pic to be put in the avatar then display the name in the avatar  */}
            <Avatar className="chat__preview__image" alt={name} src={profilePicture} />
        
            <div>
                <h2>{name}</h2>
                <p>{message}</p>
                <p classname="chat__preview__timestamp">{timestamp}</p>
            </div>
        
        </div>
        
    )
}

export default MatchedChatPreview

//this component will only be used for the chats screen so you can see all of the current chats you have going on 
//this needs to have an onclick so that you can go inot another component that triggers the actual chat to come on