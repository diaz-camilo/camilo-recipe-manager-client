import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TastyRecipe from './TastyRecipe';

export default function TastyRecipeListing() {

  const [tastyRecipes, setTastyRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://09v6kdvjlg.execute-api.us-east-1.amazonaws.com/main/tasty-recipes')
      .then(res => {
        const data = res.data
        setTastyRecipes(data.results)
        console.log(data);

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='w-100'>
      <h1 className='text-center mb-4'>     Inspiration from Tasty.co    </h1>
      <div className='d-flex justify-content-between align-content-stretch flex-wrap'>
        {tastyRecipes.length ? tastyRecipes.map(res => <TastyRecipe {...res} />) : <h2>loading...</h2>}
      </div>
    </div>
  )
}
