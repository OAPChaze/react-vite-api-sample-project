import { useState,useEffect } from 'react';
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";


function App() {
  const [items, setItems] = useState([]);
  const [fetchErrors, setErrors] = useState(null);
  const [isLoading, setLoading]= useState(true) ;

  useEffect(()=>{
    const url ="https://jsonplaceholder.typicode.com/posts";
     const fetchItems = async()=>{
      try{
      const req = await fetch(url);
      if(!req.ok) throw Error ("Cant find destination url");
      const conv = await req.json();
      setItems(conv)
      console.log(conv)
        setErrors(null);
      }
      catch(error){
        setErrors(error.message)
        console.log(error.message)
      }
      finally{
        setLoading(false)
      }
    }

    setTimeout(()=>{
      (async()=> await fetchItems())()
    })
  },[])

  return (
    <div className="App">
      <Header/>
      
      <ul>
     
      {items.map((item)=>(  
        <li className = "contents" key={item.id}>
          <h2> Title </h2>
          <label>{item.title} </label>
          <label>{item.body} </label>
          </li>
         
      ))} </ul>
      <Blog itemx={items} />
      <Footer/>
    </div>
  )
}

export default App
