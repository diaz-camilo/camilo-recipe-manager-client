import React from 'react'
import { Stack } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext'
import Recipe from './Recipe';

export default function RecipeListing() {
  const { currentUser } = useAppContext()

  const recipes = currentUser ? currentUser.recipes ? currentUser.recipes : [] : [];

  return (
    <Stack>
      {recipes.map((recipe) =>
        <Recipe
          key={recipe.id}
          id={recipe.id}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />)}
    </Stack>
  )
}
