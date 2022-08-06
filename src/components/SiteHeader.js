
import React from 'react'
import { Link } from 'react-router-dom'
import WebImage from './WebImage'

export default function SiteHeader() {
  return (
    <div className="site-header">
      <div>
       <WebImage />
      </div>
      
      <Link to="/"><h1>Video Game Reviews</h1></Link>
    </div>
  )
}