import { useState } from 'react'
import { Home } from './Home'
import { Appp } from './Circlee'


function App() {
  return (
    <>
      <Home onEditComplete={function (obj: any): void {
        throw new Error('Function not implemented.')
      } }/>
      {/* <Appp/> */}
    </>
  )
}

export default App
