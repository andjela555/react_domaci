import React from 'react'

export default function XAsis({ min, max }) {
  const arr = new Array(11).fill(0);

  return (
    <div className='xAsis'>
      {
        arr.map((val, index) => {
          return (
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: `${index * 10}%`
              }}
            >{(min + index * (max - min) / 10).toFixed(2)}</div>
          )
        })
      }
    </div >
  )
}
