
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'



const REVIEW = gql`
query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
          
        }
      }
    }
  }
`
export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="review-card">
      <h2>{data.review.data.attributes.title}</h2>
      <p>{data.review.data.attributes.body}</p>
      <h1>
      <Link to="/"><h6>Go Back</h6></Link>
      </h1>
    </div>
  )
}
