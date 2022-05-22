
import React, { useRef, useState } from 'react'
import { Alert, Card, Form, Button } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import { Navigate, useNavigate } from 'react-router-dom';

export default function RecipeForm(props) {

  const { id, ingredients, steps, picture, isEdit, handleClose } = props;

  const navigate = useNavigate()
  const { currentUser, createRecipe, updateRecipe } = useAppContext()
  const idRef = useRef();
  const [ingredientsArr, setIngredientsArr] = useState(ingredients || [])
  const [stepsArr, setStepsArr] = useState(steps || [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recipeName, setRecipeName] = useState(id)

  const handleRecipeNameChange = () => {
    setRecipeName(idRef.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    const id = idRef.current.value
    const steps = stepsArr
    const ingredients = ingredientsArr

    if (!id) return setError('name is mandatory')

    const newRecipe = { id, steps, ingredients }
    createRecipe(newRecipe)
      .then(result => {
        navigate('/my-recipes')
      })
      .catch(err => {
        setError('there was an error saving the recipe')
      })

  };

  const handleEdit = (e) => {
    e.preventDefault();
    setError('')
    const id = idRef.current.value
    const steps = stepsArr
    const ingredients = ingredientsArr

    if (!id) return setError('name is mandatory')

    const newRecipe = { id, steps, ingredients }
    updateRecipe(newRecipe)
      .then(result => {
        handleClose()
      })
      .catch(err => {
        setError('there was an error updating the recipe')
      })

  };

  if (!currentUser) return <Navigate to={'/login'} />

  return (
    <>
      <div className='w-100' style={{ maxWidth: "600px" }}>
        {!isEdit && <h1 className='text-center mb-4'>New Recipe</h1>}
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>{recipeName}</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className='mb-3' id="recipe-id">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={idRef} disabled={isEdit} onChange={handleRecipeNameChange} defaultValue={id} required />
              <Form.Text >This will be your recipe id and must be unique across all your recipes</Form.Text>
            </Form.Group>

            <Form.Label>Ingredients</Form.Label>
            <RecipeIngredients ingredientsArr={ingredientsArr} setIngredientsArr={setIngredientsArr} />

            <Form.Label>Steps</Form.Label>
            <RecipeSteps stepsArr={stepsArr} setStepsArr={setStepsArr} />

            <Form.Group className='mb-3'>
              <Button disabled={loading} className='w-100' onClick={isEdit ? handleEdit : handleSubmit}>
                {loading ? "processing..." : isEdit ? "Update" : "Save"}
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
