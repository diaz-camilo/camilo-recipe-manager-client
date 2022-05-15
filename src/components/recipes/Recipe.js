import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';

export default function Recipe(props) {

  const { id, ingredients, steps, picture, handleEdit, handleDelete } = props;

  if (!id || !ingredients || !steps) return

  return (
    <Card /*className='me-auto mb-auto my-2' /*style={{ width: '18rem', height: '30rem' }}*/>
      <Card.Body>
        <Card.Title as={'h1'} >{id}</Card.Title>
        <hr />
        <h2>ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) =>
            <li key={JSON.stringify(ingredient)}>
              <strong>{ingredient.quantity + " " + ingredient.unit + " "}</strong>{ingredient.name}
            </li>
          )}
        </ul>
        <hr />
        <h2>Steps</h2>
        <ol>
          {steps.map((step, index) => <li key={index}>{step}</li>)}
        </ol>
      </Card.Body>

      {/* <Image className='mx-2 my-2' src={`${IMAGE_BUCKET}${song.artist}-${song.title}.jpg`} /> */}
      <Card.Footer className='d-flex justify-content-between align-items-center'>
        <Button
          variant={'outline-primary'}
          size='sm'
          onClick={() => handleEdit({ id, ingredients, steps, picture })}
        >
          Edit
        </Button>
        <Button
          variant={'outline-danger'}
          size='sm'
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  )
}
