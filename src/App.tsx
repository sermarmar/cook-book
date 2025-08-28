import './App.css'
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  return (
    <>
      <div>
        <h1 className='text-4xl'>Hola mundo</h1>
        <Button onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='secondary' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='success' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='danger' onClick={() => alert('Button clicked!')}>Pulsame</Button>
        <Button color='danger' circle onClick={() => alert('Button clicked!')}>X</Button>
        <Input type='text' placeholder='Escribe' onChange={value => console.log(value)} />
      </div>
    </>
  )
}

export default App
