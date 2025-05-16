import React from 'react'
import Button from './components/Button.js'

const App = () => {
  return (
    <div>
      <Button label="Click me" onClick={()=>{alert('clicked')}} />
    </div>
  )
}

export default App
