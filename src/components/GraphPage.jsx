import React, { useEffect, useState } from 'react'
import Input from './Input';
import Point from './Point';

export default function GraphPage({ values }) {

  const [totalSlice, setTotalSlice] = useState(values.length);
  const [simulate, setSimulate] = useState(false);

  useEffect(() => {
    if (!simulate) {
      return;
    }
    setTotalSlice(1);
  }, [simulate]);

  useEffect(() => {
    if (!simulate) {
      return;
    }
    if (totalSlice === values.length) {
      setSimulate(false);
      return;
    }
    const timeout = setTimeout(() => {
      setTotalSlice(p => p + 1);
    }, 50)

    return timeout.unref;
  }, [simulate, totalSlice])

  if (values.length === 0) {
    return null
  }
  const sliced = values.slice(0, simulate ? totalSlice : values.length);

  const total = sliced.reduce((acc, val) => acc + val, 0);
  const mean = total / sliced.length
  const totalDiff = sliced.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  const variance = totalDiff / sliced.length

  const minNumber = sliced[0];
  const maxNumber = sliced[sliced.length - 1]

  const frequencyArr = new Array(maxNumber - minNumber + 1).fill(0);
  for (let value of sliced) {
    frequencyArr[value - minNumber]++;
  }

  const maxFrequency = frequencyArr.reduce((acc, val) => acc > val ? acc : val, 0);

  return (
    <div className='container'>
      <div className='row p-2'>
        <div className='col-4'>
          <Input
            label='Mean'
            readOnly
            value={mean}
          />
        </div>
        <div className='col-4'>
          <Input
            label='Variance'
            readOnly
            value={variance}
          />
        </div>
        <div className='col-4'>
          <Input
            label='Standard deviation'
            readOnly
            value={Math.sqrt(variance)}
          />
        </div>
      </div>
      <div className='p-2'>
        <button className='btn btn-success'
          onClick={() => {
            setSimulate(true);
          }}
        >Simulate point population</button>
      </div>
      <div className='p-2'>
        <div className='border graph'>
          <div className='xAsis'></div>
          {
            sliced.map(value => {
              return (
                <Point
                  x={(value - minNumber) / (maxNumber - minNumber)}
                  y={frequencyArr[value - minNumber] / maxFrequency}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
