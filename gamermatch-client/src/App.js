import React from "react"
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css';
import ActiveChat from "./components/ActiveChat";
import ChatsScreen from "./components/ChatsScreen";
import GamerCards from "./components/GamerCards";
import Header from './components/Header'
import Profile from './components/Profile'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    // BEM class naming convention for CSS!!(Block element modifier)
    <div className="app">
      

      
    
{/* had to move the Header inside the browser router because in the Header.js we use the link for the chat icon */}
      {/* the <Header/> will still be displayed on all pages because it is above and not in a path */}
      
      <BrowserRouter>
        <Header />
          <Switch>

          <Route path="/profile">
              <Profile />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
