import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Form from './components/Form.js';

class App extends React.Component {
  getRecipe (){
     alert("Working!");
  }
  render() {
    return (      
      <div className="App">
        <Navigation/>
        <div className="my-3">
          <Form getRecipe = {this.getRecipe}/>
        </div>         
      </div>      
    );
  }
}

export default App;
