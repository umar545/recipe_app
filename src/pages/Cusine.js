import React, { useEffect, useState } from 'react'

function Cusine() {
    useEffect(() => { fetchCousine('italian')} ,[])
    const [cusines, setCuisines] = useState([])
    async function fetchCousine (name) {
        const jsonData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const data = await jsonData.json()
        console.log(data)
    }
  return (
    <div>
      <h1>cusines Recipes</h1>
    </div>
  )
}

export default Cusine
