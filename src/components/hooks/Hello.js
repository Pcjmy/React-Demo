import React from 'react'
import { useEffect } from 'react'

const Hello = () => {
  useEffect(() => {
    console.log('hello')
  }, [])
  
  return <h1>Hello</h1>
}

export default Hello