import { useState } from 'react'
import './App.css'
import ElectronInfo from './components/ElectronInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <img src="src/assets/light.svg" className="img-fluid" width="150" height="150" alt="App Logo" />
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <ElectronInfo />
        </div>
      </div>
    </div>
  )
}

export default App

