import React from 'react'

const Protected = () => {
  return (
    <div>
      <h1>Protected</h1>
      <p className="callout">This page is only accessible to authenticated users. Therefore, you must have successfully logged in :)</p>
    </div>
  )
}

export default Protected
