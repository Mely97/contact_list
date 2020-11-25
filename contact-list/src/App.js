import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./componentes/comments/Header"
import Comments from "./componentes/comments/Titulo"
import Home from "./componentes/Home"


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-container"> 
          <Switch>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
         </div>
      </div>
    </Router>
  );
}

export default App;