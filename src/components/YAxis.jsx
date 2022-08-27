import React from 'react'

export default function YAxis({ max }) {
  const arr = new Array(10).fill(0);
  return (
    <div className='yAxis'>
      {
        arr.map((_value, index) => {
          return (
            <div style={{
              position: 'absolute',
              left: '-40px',
              bottom: `${index * 10}%`
            }}>
              {(index * max / 10).toFixed(2)}
            </div>
          )
        })
      }
    </div>
  )
}
