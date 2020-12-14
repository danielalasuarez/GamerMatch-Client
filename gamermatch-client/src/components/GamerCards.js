import React, { useState } from 'react'
//  note: found this really cool package called react tinder cards that I will be using for this component to give the card the swipe functionality
// source https://www.npmjs.com/package/react-tinder-card 
import TinderCard from "react-tinder-card";
import "../style/gamerCards.css"




// on line 11 we are storing the people in the state and initializing it with what the cards will have inside (switch to schema file later)
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
    return (
        <div className="gamerCards">
            <div className="gamerCards__cardContainer">
            {/* for every single gamer then the following will display */}
            {people.map((person) => (
                // <h1>{person.name}</h1> // works!!!!!!
                <TinderCard>

                </TinderCard>
            ))}

            </div>  
        </div>
    )
}

export default GamerCards
