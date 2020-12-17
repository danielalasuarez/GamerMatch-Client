import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import ActiveChat from "./components/ActiveChat";
import ChatsScreen from "./components/ChatsScreen";
import GamerCards from "./components/GamerCards";
import Header from './components/Header'
import Profile from './components/auth/Profile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import SwipeButtons from './components/SwipeButtons'
import axios from './axios'
import UserContext from './context/UserContext' //gives us user data and bring it to all of the components

function App() {

  const [userData, setUserData] = useState({ //created the token and user object in the backend in our post route
  token: undefined, //undefined when app starts bc we need to figure out if there is a token.. if no token then it needs to be undefined and we can overwrite it 
  user: undefined, //stores currently logged in user data like killRation gameHighlights etc
  });

  //if there is a token (meaning they were logged in in the previous session of the website we want to get that users info and store in context)
useEffect(() => {
const checkLoggedIn = async () => {
  //below code will give you error because currently no auth-token on the local storage (no user has logged in before no token has been saved on local storage)
let token = localStorage.getItem("auth-token"); //get the auth token on the local storage 
if (token === null){ // if token doesnt exist the token becomes null 
  localStorage.setItem("auth.token", ""); //if token is null set it to an empty string 
  token = ""; //sets the token on line 25 into an empty string 
} // after this is done we put that empty string in the headers (see lines below) and send empty string to backend

const tokenResponse = await axios.post("/profile/tokenIsValid", null, //null means dont send any data to the body
{headers: {"ex-auth-token": token} } //the headers ex auth token that we generated on postman and in the back end is going to be the token (:token) we found from the local storage above 
//if the above is null or undefined backend will return false 
);
// console.log(tokenResponse.data) //checkedLoggedIn WORKING so far!!! Above Lets us know if there is a user logged in or not and validates it because of our backend code. also handles if user is NOT logged in

if(tokenResponse.data) { //if there is a user  IS successfully logged in then I want to get the user info
  //get the currently logged in user and store all of that users data in the context!!!!!
const userResponse = await axios.get("/profile/", {headers: {"ex-auth-token": token} //get request doesnt have data so no null param passed 
//the above states we make a request to /profile/ with a header ex-auth-token that we got from the axios post request above 
});
// using setUserdata function created above to set the token and the user in that state created ... it will the be brought into the context below as a value 
setUserData({ //no longer undefined now we are setting the state
  token,
  user: userResponse.data,
});
}
}
checkLoggedIn(); //WORKS!!!!!!! this function now allows all of the components to have access to user :)
},[])


  return (
    // BEM class naming convention for CSS!!(Block element modifier)
    <div className="app">
      

      
    
{/* had to move the Header inside the browser router because in the Header.js we use the link for the chat icon */}
      {/* the <Header/> will still be displayed on all pages because it is above and not in a path */}
      
      <BrowserRouter>
      {/* since it is wrapped now all of the components have access to the userData and it will update because of setUserData function
      UserContext is similar to redux */}
      <UserContext.Provider value={{ userData, setUserData }}> 
        <Header />
          <Switch>

          <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
{/* :person is an id so it can change any person this is for the actual message */}
          <Route path="/chats/:person">
              <ActiveChat />
            </Route>


            <Route path="/chats">
              <ChatsScreen />
            </Route>

            <Route path="/">
              <GamerCards />
              <SwipeButtons />
            </Route>

          </Switch>
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
