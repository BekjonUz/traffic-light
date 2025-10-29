import React from 'react'
import Traffic from './components/traffic'
import CarsLight from './components/CarsLight'

const App :React.FC= () =>  {
  return (
    <div>
      <Traffic/>
      <CarsLight/>
    </div>
  )
}

export default App