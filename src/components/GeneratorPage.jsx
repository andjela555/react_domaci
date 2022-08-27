import React, { useState } from 'react'

export default function GeneratorPage({ values, setValues }) {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(1)
  const [total, setTotal] = useState(1);
  return (
    <div className='container'>
      <h1 className='p-2 text-center'>Generate numbers</h1>
      <div className='row d-flex align-items-center'>
        <div className='col-3'>
          <div className="form-group">
            <label className="col-form-label">Min</label>
            <input
              className='form-control'
              required
              onChange={e => {
                setMinimum(e.currentTarget.value);
              }}
              value={minimum}
            />
          </div>

        </div>
        <div className='col-3'>
          <div className="form-group">
            <label className="col-form-label">Max</label>
            <input
              className='form-control'
              required
              onChange={e => {
                setMaximum(e.currentTarget.value);
              }}
              value={maximum}
            />
          </div>
        </div>
        <div className='col-3'>
          <div className="form-group">
            <label className="col-form-label">Total elements</label>
            <input
              className='form-control'
              required
              min='1'
              onChange={e => {
                setTotal(Math.max(1, Number(e.currentTarget.value)));
              }}
              value={total}
            />
          </div>
        </div>
        <div className='col-3'>
          <button className='btn btn-primary' onClick={() => {
            let numbers = [];
            const minN = Number(minimum);
            const maxN = Number(maximum);
            for (let i = 0; i < total; i++) {
              const randomNumber = Math.random() * (maxN - minN) + minN;
              numbers.push(Math.floor(randomNumber));
            }
            setValues(numbers);
          }}>Generate</button>
        </div>
      </div>
      <div className='mt-2'>

      </div>
    </div>
  )
}
