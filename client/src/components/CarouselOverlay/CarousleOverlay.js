import React from 'react'
import './styles.css'
export default function CarousleOverlay({children}) {
  return (
    <div className='carousel-overlay'>{children}</div>
  )
}
