import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react'
//  note: found this really cool package called react tinder cards that I will be using for this component to give the card the swipe functionality
// source https://www.npmjs.com/package/react-tinder-card 
import TinderCard from "react-tinder-card";
import "../style/gamerCards.css"




// on line 13 we are storing the people in the state and initializing it with what the cards will have inside (switch to pull from back end and schema file later)
function GamerCards() {
    const [people, setPeople] = useState([
        {
        name: 'Gamer Tag goes here',
        url: 'https://i.imgur.com/JNPw9YC.jpg',
        },
        {
            name: 'coolgamer2020',
            url: 'https://i.imgur.com/JNPw9YC.jpg',
            },
    ]);

    // below are function that we are going to pass below on the display of the card

    //function to swipe card .... console logs when the person swipes left
    const swiped = (direction, nameDelete) => {
        console.log("removing gamer: " + nameDelete);
        // setNewDirection(direction);
    };

    //function to make the card not visible.... console logs when the card is gone
    const outOfFrame = (name) => {
        console.log("gamer " + name + " no longer on the screen");
    };


    return (
        <div className="gamerCards">
            <div className="gamerCards__cardContainer">
            {/* for every single gamer then the following will display */}
            {people.map((person) => (
                // <h1>{person.name}</h1> // works!!!!!!
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']} //does not allow to swipe up and down 
                //function below puts the card out of frame if it is swiped to the left and will console log because of the swiped function 
                //these onSwipe and OnCardLeftScreen are all from the tinder card library.
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)} //this function runs when the card is out of the frame
                >
                    {/* inside the <TinderCard> goes the below div which styles the layout of card */}
                    {/* this div has a background of the gamer image (used inline styling) and INSIDE goes the name and stats.. this will overlay the info on the image */}
                    <div
                    style={{ backgroundImage: 'url(' + person.url + ') '}}
                    className='card'
                    >

                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}

            </div>  
        </div>
    )
}

export default GamerCards
