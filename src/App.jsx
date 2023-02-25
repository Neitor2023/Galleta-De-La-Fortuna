import './App.css'
import { useState } from 'react'
import Message from './components/Message'

function App() {
  const [ isVisible, setIsVisible ] = useState (true)

  const funcionDetonada = () =>{
    setIsVisible(!isVisible)
  }

  // const [count, setCount] = useState(0)

    return (
    <div className="App">
        {/* <Bombillo/> */}
        <Message
        visible={ isVisible }
        dataSalida={ funcionDetonada }
        />

        <Message
        visible={ isVisible }
        dataSalida={ funcionDetonada }
        />
        
        <Message
        visible={ isVisible }
        dataSalida={ funcionDetonada }
        />
    </div>
  )
}

export default App
