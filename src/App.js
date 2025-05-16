import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Button label="Click me" onClick={()=>{alert('clicked')}} />
    </div>
  )
}

export default App
