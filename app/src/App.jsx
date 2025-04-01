import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ElectronInfo from './components/ElectronInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Talisman Pro</h1>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <ElectronInfo />
        </div>
      </div>
    </div>
  )
}

export default App

