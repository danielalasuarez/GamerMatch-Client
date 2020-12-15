import React from "react"
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css';
import ChatsScreen from "./components/ChatsScreen";
import GamerCards from "./components/GamerCards";
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    // BEM class naming convention for CSS!!(Block element modifier)
    <div className="app">
      

      
      
      {/* <ChatsScreen />
      <MatchedChatScreen /> */}
{/* had to move the Header inside the browser router because in the Header.js we use the link for the chat icon */}
      {/* the <Header/> will still be displayed on all pages because it is above and not in a path */}
      
      <BrowserRouter>
        <Header />
          <Switch>
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
