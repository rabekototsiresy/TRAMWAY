import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/welcome';


class App extends React.Component {
 
  render(){
    return (
      <div>
        <BrowserRouter>
  
          <Switch>
           <Route path="/" component={Welcome } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
