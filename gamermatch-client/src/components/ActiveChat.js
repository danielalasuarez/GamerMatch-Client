import React, {useState} from 'react'
import "../style/activeChat.css"
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

//this is hard coded for now if time i want to add it to the backend and save the chat data there and use websocket

function ActiveChat() {
//to get the input to work and set the input state
const [input, setInput] = useState('');

//to set the messages 
    const [messages, setMessages] = useState ([
        {
        name: 'dani',
        image: "https://i.imgur.com/JNPw9YC.jpg",
        message: "What time are you free to play?"
        },
        {
            message: "from 8pm to 2am tonight!"
            },
            {
                name: 'dani',
                image: "https://i.imgur.com/JNPw9YC.jpg",
                message: "i'm down to play, add me"
                },
    ])
//function that will take what the user types in the input and sends it where we want 
    const handleSend = e => {
        e.preventDefault(); //if the event.preventDefault is not added it will refresh when you press enter on keyboard
        //deally this will be sent to the data base if hooked to backend
        // the below will set setMessages to an array and grab whatever was in that array already which is ...messages
        //as well as a new message with whatever you've typed in your input which is {message:input}
        setMessages([...messages, {message: input}]);
        //reset the input
        setInput('');
    }
    return (
        <div className="active__chat">
            <p className="active__chat__match__message"> YOU MATCHED WITH DANI! SET UP THE DETAILS AND START GAMING</p>
            {/* for every single message i want to render a div with a p tag that is going to get the message.message 
            message.message is messaged passed in the anon function below and .message part is from the message in the object 
            for ex .message is above stated ad "What time are you free to play?" */}
            {messages.map(message => (
                //below we are going to say IF(?) there is a name in the message then trigger the avatar
                //if not we will make it  adifferent color on css 
                message.name ? ( // this says IF there is a name 

                    <div className="active__chat__messages">
                        <Avatar className="active__chat__preview__image" alt={message.name} src={message.image} />
                            <p className="active__chat__text">{message.message}</p>
                    </div>
                    ) : ( //ELSE (so if it does not have a name property) THEN the below will run 
                    //no avatar for user message
                        <div className="active__chat__messages"> 
                            <p className="active__chat__text__user">{message.message}</p>
                        </div>
                    )
            ))}

            {/* INPUT TEXT  */}
    
            
                <form className="active__chat__input">
                <Link to='/chats'>
                <IconButton className='active__chat__back__chats'>
                    <ArrowBackTwoToneIcon fontSize='large' className="active__chat__back__home__arrow"/>
                </IconButton>
            </Link>
                    <input 
                    onChange={e => setInput(e.target.value)} //every time we type in the input feild(on chnage) its going to update 
                    value={input} // here we set the input value to equal the input state we set above 
                    className="active__chat__input__box"
                    type="text" />

{/* handleSend is the function we created above which will send what is in the input feild to where we want it   */}
                    <button onClick={handleSend} type="submit" className="active__chat__input__button">SEND</button> 
                    
                </form>
               

           
        </div>
    )
}

export default ActiveChat
