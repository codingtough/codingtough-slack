import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import Login from '../Login';
import { useStateValue } from '../StateProvider';
import './App.css';

function App() {
   const [{ user }, dispatch] = useStateValue();

   return (
      <div className="app">
         <Router>
            {!user ? (                    
                  <Login />
            ) : (
               <div>
                  <Header />
                  <div className="app__body">
                     <Sidebar />

                     <Switch>
                        <Route path="/room/:roomId">
                           <Chat />
                        </Route>
                        <Route path="/">
                           <h1>Welcome</h1>
                        </Route>
                     </Switch>
                     
                  </div> 
               </div>
            )}
         </Router>
       </div>
   );
}

export default App;
