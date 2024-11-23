'use client'

import React from 'react'
import { Circles, TailSpin } from 'react-loader-spinner'


const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
      <TailSpin height={80} width={80} color="#ffd700" ariaLabel="loading" />
    </div>
  )
}

export default Loading