import React, { Component } from 'react';
import './App.css';
import Grid from "./Grid";
import Categories from "./Categories"

class App extends Component{
  //CONSTRUCTOR, STATE
  constructor(){
    super();
    this.state={
      a:"ayo"
    };
  }



  render(){
    
    let program=(questions,answers)=>{
      let a=10
      console.log(a)
    }

    
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
    console.log(categories);

      let selectedThemes=[11532,5412,11496,11498,11499];
        let questions=[[],[],[],[],[]];
        let answers=[[],[],[],[],[]];
        (async()=>{
                for (let theme=0; theme<5; theme++){
                    (async()=>{
                      for (let score=200; score<1001; score+=200){
                            var url = `http://jservice.io/api/clues?&value=${score}&category=${selectedThemes[theme]}`
                            fetch(url)
                                .then(res=>res.json())
                                .then(data=>{
                                    let a=(data[0].question);
                                    questions[theme].push(a);
                                    if (score===1000 && theme===4){
                                      return program(questions,answers)
                                    }
                                })
                                .catch(e=>{
                                    questions[theme].push("FREE")
                                    if (score===1000 && theme===4){
                                      return program(questions,answers)
                                    }
                                })
                            }
                    })()
                }
        
            }
      
        )()

    }
  )



// RETURN STATEMENT JSX
  return (
    <div className="App">
      <header>
        <div>
        <Categories></Categories>
        </div>
        <div>
        <Grid></Grid>
        </div>
      </header>
    </div>
  );

  }
}
export default App;
