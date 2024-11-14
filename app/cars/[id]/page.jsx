'use client'

import React from 'react'

const CarDetails = ({ params }) => {

  return (
    <div className='text-white'>CarDetails: {params.id}</div>
  )
}

export default CarDetails