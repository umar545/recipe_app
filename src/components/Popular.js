import React, { useEffect, useState } from 'react'

function Popular() {
    const [recipes , setRecipes]= useState([])
    useEffect(() => { fetchPopular() },[])
    const fetchPopular = async () => {
        const jsonData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
        const data = await jsonData.json();
        setRecipes(data.recipes)
    }
  return (
    <div className='popular-wrapper'>
      <h1>populars</h1>
      <div className="row">
        { recipes.map(recipe => (
          <div key={recipe.id} className="col-lg-3 col-md-4 col-sm-12">
            <div className='popular-card' key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular
