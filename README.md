# GamerMatch-Client

Welcome to Gamer Match! 

Here you will be able to create a profile with your gamer stats and swipe right on a player you are up to play against and swipe left on the players that you feel are not in your league! Upon match, you will be able to message the account.

MERN Stack. User auth completed with Context API. Technologies used include MongoDB, bcrypt, jsonwebtoken, axios, react-tinder-app, material-ui, express, react-router-dom, react, node.js. The front end is deployed on firebase and the backend is deployed on Heroku.

Front-end: https://gamermatch-client.web.app/
Back-End: https://gamermatch-backend.herokuapp.com/

Future plans: 
-Incorporate websocket for the chat functionality 
-Upon Swipe right store that user in an array that will be displayed on top of chat screen
-Upon click of the matched user redirect to websocket
-Incorporate STEAM third party API for user data
-Get the view profile page working so users can view,edit and delete their account

Long term goals:
-Incorporate rating logic so users will only be displayed gamers with similar stats
-Allow users to play against each other for a brief "preview" before they match (mini battle)
-Incorporate match logic instead of swipe right logic (it has to be that both users swiped right on each other then they can chat.. right now it will put anyone you swipe right on in the top of chat screen)

Things that went wrong:
-Delete route working on backend successfully but unable to trigger it on click of the delete account button
-Was unable to grab the information the user inputted upon registering to display it on display profile page
-Due to the above could not create edit routes
-Game highlights is supposed to be linked to a video. That is currently not working, must be fixed.
-Deployment of Firebase on the front crashed and does not have full functionality. Must be fixed.
