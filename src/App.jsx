import { useState,useEffect } from 'react';
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";


function App() {
  const [items, setItems] = useState([]);
  const [fetchErrors, setErrors] = useState(null);
  const [isLoading, setLoading]= useState(true) ;

  useEffect(()=>{
    const url ="https://dummyjson.com/posts";
    const fetchItems = async()=>{
      try{
      const req = await fetch(url);
      if(!req.ok) throw Error ("Cant find destination url");
      const conv = await req.json();
      setItems(conv)
      console.log(setItems)
        setErrors(null);
      }
      catch(error){
        setErrors(error.message)
      }
      finally{
        setLoading(false)
      }
    }

    setTimeout(()=>{
      (async()=> await fetchItems())()
    },2000)
  },[])

  return (
    <div className="App">
      <Header/>
      <Blog items={items}/>
      <Footer/>
    </div>
  )
}

export default App
