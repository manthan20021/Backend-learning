import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [joke, setjoke] = useState([])

  useEffect(()=>{
  axios.get('/api/jokes')
  .then((Response) => {
    setjoke(Response.data)
  })
  .catch((error) => {
     console.error(error);
  })
  },[])

  return (
    <>
      <h1>first fullstack app</h1>
      <h2>JOKE: {joke.length} </h2>

      {
        joke.map((jokes) => {
          return(
          <div key={jokes.id}> 
          <h3>title: {jokes.title}</h3>
          <hp>content: {jokes.content}</hp>
          </div>
          )  
        })
      }

  
    </>
  )
}

export default App
