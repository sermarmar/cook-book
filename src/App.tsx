import './App.css'
import { Navbar } from './components/Navbar';
import { RecipeForm } from "./features/createRecipe/components/RecipeForm";
import { RecipesList } from './features/recipeslist/RecipesList';

function App() {

  return (
    <>
      <div>
        <Navbar />
      
        <div>
          <RecipesList />
        </div>

        <div>
          <RecipeForm />
        </div>
        
      </div>
    </>
  )
}

export default App
