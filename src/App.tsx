import './App.css'
import { Navbar } from './components/Navbar';
import { RecipesList } from './features/recipeslist/RecipesList';

function App() {

  return (
    <>
      <div>
        <Navbar />
      
        <div>
          <RecipesList />
        </div>
        
      </div>
    </>
  )
}

export default App
