import './App.css';

function App() {
  const api_url=("http://jservice.io/api/categories?&count=100")
  let myPromise= new Promise((resolve,reject)=>{
    fetch(api_url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data)
        }    
        )
    })

  let categories=[]
  myPromise.then((x)=>{
    categories=x.slice()
    })


  return (
    <div className="App">

    </div>
  );
}

export default App;
