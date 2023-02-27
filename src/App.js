// import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import axios from "axios";
import Gallery from './Gallery';

// import 'bootstrap/dist/css/bootstrap.min.css';




 const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
  },[])

  const changeHandler = (e) => {
    setSearch(e.target.value);

  }


  // for submitting form

  const submitHandler = (e) =>{
    e.preventDefault(); 
    axios.get( `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response=> {setData( response.data.photos.photo )}

    )
    
  }


  return (

    <div className="App">
      
      <h2 style={{color:"Grey", margin:"20px"}}>  Welcome to Our Image Gallery Application </h2>
      <h4 style={{color:"Grey", margin:"20px"}}>  Search your item </h4>
      <form onSubmit={submitHandler}>
          <input type="text" name="text" size="30" value={search} onChange={changeHandler}/> <br /><br />
          <input type="submit" name="search" />
      

          
      </form>
      <br />
     
      {
        data.length>=1?<Gallery data={data} /> : <h3>Data not loaded...</h3>
      }


    </div>
  );
}

export default App;
