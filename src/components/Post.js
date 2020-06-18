import React from 'react'

export default ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Заголовок - {post}</h5>
      </div>
    </div>
  )
}