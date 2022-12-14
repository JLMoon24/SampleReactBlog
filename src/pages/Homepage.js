import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
query GetReviews {
    reviews {
      data {
        id
        attributes {
          title,rating,body
        }
      }
    }
  }
`

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.reviews.data.map(review => (
        <div key={review.id} className="review-card">
         
          <h2>{review.attributes.title}</h2>
         
          <small>{review.attributes.rating} out of 10</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}


