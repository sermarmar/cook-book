import './App.css'
import { Bagde } from './components/Badge';
import { Card, CardDecription, CardImage, CardTitle } from './components/card/Card';
import { Navbar } from './features/navbar/Navbar';

function App() {

  return (
    <>
      <div>
        <Navbar />
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardImage src="/foto.jpg" alt="Funciona" />
            <CardTitle>
              <div className='flex justify-between items-center'>
                <h2>CardTitle</h2>
                <Bagde size='small'>Entrante</Bagde>
              </div>
            </CardTitle>
            <CardDecription>This is a description of the card.</CardDecription>
          </Card>
          <Card>
            <CardImage src="/foto.jpg" alt="Funciona" />
            <CardTitle>Card Title</CardTitle>
            <CardDecription>This is a description of the card.</CardDecription>
          </Card>
          <Card>
            <CardImage src="/foto.jpg" alt="Funciona" />
            <CardTitle>Card Title</CardTitle>
            <CardDecription>This is a description of the card.</CardDecription>
          </Card>
        </div>
        
      </div>
    </>
  )
}

export default App
