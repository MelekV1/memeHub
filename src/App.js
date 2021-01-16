import React from 'react';
import  Meme  from "./Meme/Meme"; 
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Malloc(n*SizeOf(Humor))</h1>
      <Switch>
        
        <Route exact path='/'>
          <Meme />
        </Route>

        <Route path='/more'>
          <Meme />
        </Route>
      </Switch>
    </div>
  );
  }

export default App;
