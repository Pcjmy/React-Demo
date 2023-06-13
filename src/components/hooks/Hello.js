import React from 'react'
import { useState, useEffect } from 'react'

const Hello = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('hello')
  }, [count])

  const handleClick = () => {
    setCount(count+1)
  }

  return <div>
    <div>{count}</div>
    <button onClick={handleClick}>add</button>
  </div>
}

export default Hello
