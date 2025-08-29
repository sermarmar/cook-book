import './App.css'
import { Button } from './components/Button';
import { Card } from './components/card/Card';
import { CardDecription } from './components/card/CardDescription';
import { CardImage } from './components/card/CardImage';
import { CardTitle } from './components/card/CardTitle';
import { ComboSelect } from './components/ComboSelect';
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
        <ComboSelect list={['Option 1', 'Option 2', 'Option 3']} onSelect={value => console.log(value)} />
        <Card>
          <CardImage src="/foto.jpg" alt="Funciona" />
          <CardTitle>Card Title</CardTitle>
          <CardDecription>This is a description of the card.</CardDecription>
        </Card>
      </div>
    </>
  )
}

export default App
