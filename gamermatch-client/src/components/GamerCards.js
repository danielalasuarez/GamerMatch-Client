import { SwipeableDrawer } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
//  note: found this really cool package called react tinder cards that I will be using for this component to give the card the swipe functionality
// source https://www.npmjs.com/package/react-tinder-card 
import TinderCard from "react-tinder-card";
import "../style/gamerCards.css"
import axios from '../axios'




// on line 14 we are storing the people in the state and initializing it with what the cards will have inside (switch to pull from back end and schema file later)
function GamerCards() {
    // const [people, setPeople] = useState([
    //     {
    //     name: 'Gamer Tag goes here',
    //     url: 'https://i.imgur.com/JNPw9YC.jpg',
    //     },
    //     {
    //         name: 'coolgamer2020',
    //         url: 'https://i.imgur.com/JNPw9YC.jpg',
    //         },
    // ]);

    //the below is the new version of the hard coded cards above because we will be using the scheam created in the backend
    //empty array
    const [people, setPeople] = useState([]);

    //useEffect will occur when the tinder cards load
    //it will run the below piece of code and not run it again
    //same as component did mount
    //in the [] at the end you can add [name] id the name changes and it will refire the code and run again once 
    useEffect(() => {
//async function below
        async function fetchData() {
            const request = await axios.get("/gamers/cards") // calling our endpoint from back
            
            //setting the people variable on line 27 whatever request.data comes back as
            setPeople(request.data);
        }
//calling it below
        fetchData();
    }, []) 

    console.log(people)
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
                //using the react tinder card package docs for the below
                <TinderCard
                className="swipe"
                //keys to make the app faster so it wont re render the entire thing just re render the list
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
                    //took me forever to debug. i had person.url originally and in the schema i wrote imgURL 
                    style={{ backgroundImage: 'url(' + person.imgUrl + ') '}}
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
