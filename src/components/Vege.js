import React, { useEffect, useState } from 'react'

function Vege() {
    const [vegeRecipes , setVegeRecipes]= useState([])
    useEffect(() => { fetchVege() },[])
    const fetchVege = async () => {
        const jsonData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&diet=vegeterian`)
        const data = await jsonData.json();
        console.log(data.recipes)
        setVegeRecipes(data.recipes)
    }
  return (
    <div className='popular-wrapper'>
      <h1>vege recipes</h1>
      <div className="row">
        { vegeRecipes.map(recipe => (
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

export default Vege
