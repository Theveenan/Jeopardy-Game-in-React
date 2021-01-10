import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      a:"ayo"
    };


  }


  render(){
//Fetch category data in first promise
  let api_url=("http://jservice.io/api/categories?&count=100")
  let myPromise= new Promise((resolve,reject)=>{
    fetch(api_url)
        .then(res=>res.json())
        .then(categories=>{
            resolve(categories)
        }    
        )
    })
//Rest of program nested within .then
  myPromise.then((categories)=>{
    console.log(categories)

    })



// RETURN STATEMENT JSX
  return (
    <div className="App">
      <p>{this.state.a}</p>
    </div>
  );

  }
}
export default App;
