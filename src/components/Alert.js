import React from 'react'

export const Alert = ({ text }) => (
  <div className="alert alert-danger w-50" role="alert">
    {text}
  </div>
)