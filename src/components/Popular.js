import React, { useEffect, useState } from 'react'

function Popular() {
    const [recipes , setRecipes]= useState([])
    useEffect(() => { fetchPopular() },[])
    const fetchPopular = async () => {
        console.log(process.env.REACT_APP_API_KEY)
        const jsonData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
        const data = await jsonData.json();
        setRecipes(data.recipes)
    }
  return (
    <div>
      <h1>populars</h1>
      { recipes.map(recipe => (
        <div key={recipe.id}>
            {recipe.title}
        </div>
      ))}
    </div>
  )
}

export default Popular
