import React from 'react'
import { Card, Image } from 'react-bootstrap';

export default function TastyRecipe(props) {

  const { name, instructions, tags, yields, thumbnail_url, credits, description } = props;

  return (
    <Card className='mb-2 mt-2' style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title as={'h1'} >{name}</Card.Title>
        {description && <p>{description}</p>}
        <hr />
        {instructions && <>
          <h2>instructions</h2>
          <p>{yields}</p>
          <ol>
            {instructions?.map(ins => <li key={ins.id}>{ins.display_text}</li>)}
          </ol>
          <hr />
        </>}
        {!!tags.length && <>
          <h2>Tags</h2>
          <ul>
            {tags.map((tag) => <li key={tag.id}>{tag.display_name}</li>)}
          </ul>
        </>}
      </Card.Body>
      <Image src={thumbnail_url} />

      <Card.Footer >
        <h3>By: {credits[0].name}</h3>
      </Card.Footer>

    </Card>
  )
}
