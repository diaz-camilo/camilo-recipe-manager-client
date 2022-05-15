import React, { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function RecipeSteps(props) {

  const { stepsArr, setStepsArr } = props

  const stepRef = useRef()

  const handleAddStep = (e) => {
    e.preventDefault();
    const step = stepRef.current.value;
    if (step) setStepsArr([...stepsArr, step]);

    stepRef.current.value = ''
  }

  const handleRemoveStep = (index) => {
    const steps = [...stepsArr];
    steps.splice(index, 1)
    setStepsArr(steps)
  }


  return (
    <>
      <Form onSubmit={handleAddStep}>
        <Form.Group className='mb-3' >
          <Form.Control className='mb-3' ref={stepRef} required />
          <Button className='w-100' variant='outline-primary' onClick={handleAddStep} >Add step</Button>
        </Form.Group>
      </Form>
      <Form.Group className='mb-3' as={Row}>
        <Form.Text>
          <ol>
            {stepsArr.map((step, index) => <li key={index} >
              <div className='d-flex justify-content-between mb-2'>
                {step} <Button variant='outline-danger' size='sm' onClick={() => handleRemoveStep(index)}>Remove</Button>
              </div>
            </li>)}
          </ol>
        </Form.Text>
      </Form.Group>
    </>
  )
}
