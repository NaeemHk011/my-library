import React from 'react'
import Button from './components/Input'

const App = () => {
  return (
    <div>
      <Button label="Click me" onClick={()=>{alert('clicked')}} />
    </div>
  )
}

export default App
