import './App.css';
import { useState } from 'react';

function App() {

  const [Data,setData] = useState("")
  const [result,setResult] = useState([])

  const getImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=Y8MKhaLwhqrsFt9utKmx2Kse1GSoSRuUxkAZRXkOX5w&query=${Data}`)
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      setResult(data.results)
    })
  }


  return (
    <div className="App">
      <div className="input-field">
          <input type="text" placeholder='Search Images' value={Data} onChange={(e)=> {setData(e.target.value)}}/>
          <button onClick={()=>getImages()}>Search</button>
      </div>
      <div className='gallery'>
        {result.map((item)=> {
          return <img className='item' key = {item.id} src = {item.urls.regular}/>
        })}
      </div>
    </div>
  );
}

export default App;
