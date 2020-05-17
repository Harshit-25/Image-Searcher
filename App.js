import React,{useEffect,useState} from 'react';
import Header from "./Components/Header"
import Image from "./Components/Image"
import './App.css';

function App() {
  let Api_Key="16587239-2e82cf204838ec81998ccc788"

  const [image,setImage]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('tree')

  useEffect(()=>{
    fetchData();
  },[query]);

  let fetchData=async()=>{
    let response=await fetch(`https://pixabay.com/api/?key=${Api_Key}&q=${query}&image_type=photo`)
    let data=await response.json();
    setImage(data.hits);
  }

  let searchItem=(e)=>{
    setSearch(e.target.value)
  }

  let finalResult=(e)=>{
    e.preventDefault();
    setQuery(search);
  }
  return (
    <div className="App">
      <Header/>
      <form className="search-form" onSubmit={finalResult}>
      <input className="search-bar" type="text" value={search} onChange={searchItem}/>
      <button className="search-button" type="submit">search
      </button>
      </form>
      <div className="result">
      {
        image.map((img)=>(
          <Image
          key={img.id}
          downloads={img.downloads}
          likes={img.likes}
          largeImageUrl={img.largeImageURL}
          />
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
