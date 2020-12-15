import React, {useState} from 'react'
import "../style/activeChat.css"
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

//this is hard coded for now if time i want to add it to the backend and save the chat data there and use websocket

function ActiveChat() {

    const [messages, setMessages] = useState ([
        {
        name: 'dani',
        image: "",
        message: "What time are you free to play?"
        },
        {
            image: "",
            message: "from 8pm to 2am tonight!"
            },
            {
                name: 'dani',
                image: "",
                message: "i'm down to play, add me"
                },
    ])
    return (
        <div className="active__chat">
            <p> YOU MATCHED WITH DANI! SET UP THE DETAILS AND START GAMING</p>
            {/* for every single message i want to render a div with a p tag that is going to get the message.message 
            message.message is messaged passed in the anon function below and .message part is from the message in the object 
            for ex .message is above stated ad "What time are you free to play?" */}
            {messages.map(message => (
                    <div>
                            <p>{message.message}</p>
                    </div>
            ))}

            <Link to='/chats'>
                <IconButton className='chats__back__home'>
                    <ArrowBackTwoToneIcon fontSize='large' className="chats__back__home__arrow"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default ActiveChat
