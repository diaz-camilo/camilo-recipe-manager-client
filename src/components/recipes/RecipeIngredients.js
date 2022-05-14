import React, { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function RecipeIngredients(props) {

  const { ingredientsArr, setIngredientsArr } = props

  const quantityRef = useRef()
  const unitRef = useRef()
  const nameRef = useRef()

  const handleAddIngredient = (e) => {
    console.log('hello world');
    e.preventDefault();
    const quantity = quantityRef.current.value;
    const unit = unitRef.current.value;
    const name = nameRef.current.value;
    if (quantity && unit && name) {
      setIngredientsArr([...ingredientsArr, { quantity, unit, name }]);
      quantityRef.current.value = ''
      unitRef.current.value = ''
      nameRef.current.value = ''
    }
  }

  const handleRemoveStep = (index) => {
    const steps = [...ingredientsArr];
    steps.splice(index, 1)
    setIngredientsArr(steps)
  }

  return (
    <>
      <Form onSubmit={handleAddIngredient}>
        <Row>
          <Form.Group className='mb-3' as={Col} >
            <Form.Control className='mb-3' ref={quantityRef} placeholder='quantity' type='number' min={0} />
          </Form.Group>
          <Form.Group className='mb-3' as={Col} >
            <Form.Control className='mb-3' ref={unitRef} placeholder='unit' />
          </Form.Group>
          <Col xs={7}>
            <Form.Group className='mb-3' >
              <Form.Control className='mb-3' ref={nameRef} placeholder='name' />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className='mb-3'>
          <Button className='w-100' variant='outline-primary' onClick={handleAddIngredient} >Add ingredient</Button>
        </Form.Group>
      </Form>
      <Form.Group className='mb-3' as={Row}>
        <Form.Text>
          <ul>
            {ingredientsArr.map((ingredient, index) => <li key={index} >
              <div className='d-flex justify-content-between mb-2'>
                {ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.name} <Button variant='outline-danger' size='sm' onClick={() => handleRemoveStep(index)}>Remove</Button>
              </div>
            </li>)}
          </ul>
        </Form.Text>
      </Form.Group>
    </>
  )
}
