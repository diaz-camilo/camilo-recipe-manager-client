
import React, { useRef, useState } from 'react'
import { Alert, Card, Form, Button } from 'react-bootstrap';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';

export default function RecipeForm(props) {

  const { id, ingredients, steps, picture } = props;

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
    e.preventDefault()
    console.log('new recipe submit clicked')
  };

  return (
    <>
      <div className='w-100' style={{ maxWidth: "600px" }}>
        <h1 className='text-center mb-4'>New Recipe</h1>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>{recipeName}</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            {/* <Form > */}

            <Form.Group className='mb-3' id="recipe-id">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={idRef} onChange={handleRecipeNameChange} defaultValue={id} required />
              <Form.Text >This will be your recipe id and must be unique across all your recipes</Form.Text>
            </Form.Group>
            <Form.Label>Steps</Form.Label>
            <RecipeSteps stepsArr={stepsArr} setStepsArr={setStepsArr} />
            <Form.Label>Ingredients</Form.Label>
            <RecipeIngredients ingredientsArr={ingredientsArr} setIngredientsArr={setIngredientsArr} />
            <Form.Group className='mb-3'>
              <Button disabled={loading} className='w-100' onClick={handleSubmit}>
                {loading ? "processing..." : "Sign Up"}
              </Button>
            </Form.Group>
            {/* </Form> */}
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
