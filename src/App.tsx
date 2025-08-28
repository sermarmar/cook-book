import './App.css'
import { Button } from './components/Button';

function App() {

  return (
    <>
      <div>
        <h1 className='text-4xl'>Hola mundo</h1>
        <Button color='primary' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='secondary' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='success' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='danger' onClick={() => alert('Button clicked!')}>Pulsame</Button>
      </div>
    </>
  )
}

export default App
