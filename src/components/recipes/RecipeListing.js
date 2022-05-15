import React, { useState } from 'react'
import { Stack } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext'
import Recipe from './Recipe';
import { Modal, Button } from 'react-bootstrap';
import RecipeForm from './RecipeForm';
import { Navigate } from 'react-router-dom';

export default function RecipeListing() {
  const { currentUser, updateRecipe, deleteRecipe, } = useAppContext()

  const recipes = currentUser?.recipes ? currentUser.recipes : [];

  const [show, setShow] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = (recipe) => {
    setShow(true)
    setEditRecipe(recipe)

  };

  const handleDelete = (id) => {
    console.log("from recipe");
    deleteRecipe(id)
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err))
  }
  const handleEdit = (recipe) => {

    console.log("from recipe", recipe);
    updateRecipe(recipe)
      .then(() => console.log("updated"))
      .catch(err => console.log(err))
  }

  if (!currentUser) return <Navigate to={"/login"} />

  return (
    <>
      {editRecipe &&
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe - {editRecipe.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeForm {...editRecipe} isEdit handleClose={handleClose} />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>}

      <Stack gap={5} >
        <h1>My Recipes</h1>
        {recipes.map((recipe) =>
          <Recipe
            key={recipe.id}
            id={recipe.id}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            handleEdit={handleShow}
            handleDelete={handleDelete}
          />)}
      </Stack>
    </>
  )
}
