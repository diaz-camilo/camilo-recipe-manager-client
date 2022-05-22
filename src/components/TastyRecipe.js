import React from 'react'
import { Card, Image } from 'react-bootstrap';

export default function TastyRecipe(props) {

  const {
    name,
    thumbnail_url,
    credits,
    canonical_id,
    slug
  } = props;

  const kind = canonical_id.includes('recipe') ? 'recipe' : 'compilation';
  const link = `https://tasty.co/${kind}/${slug}`

  return (

    <Card className='mb-2 mt-2' style={{ width: '20rem' }}>
      <Card.Body>
        <a href={link} style={{ textDecoration: 'none' }} >
          <Card.Title as={'h1'} >{name}</Card.Title>
        </a>
        <hr />
      </Card.Body>
      <Image src={thumbnail_url} />
      <Card.Footer >
        <h3>By: {credits[0].name}</h3>
      </Card.Footer>
    </Card>

  )
}
