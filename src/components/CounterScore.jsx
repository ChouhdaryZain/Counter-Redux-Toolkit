import React from 'react'
import { useSelector } from 'react-redux'

const CounterScore = () => {
  const { counterVal } = useSelector(store => store.counter);
  return (
    <p className="lead mb-4">Counter Current Score is: {counterVal}</p>
  )
}

export default CounterScore