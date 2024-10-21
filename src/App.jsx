import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack';
import { useState } from 'react'
import './App.css';

export const stockedIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const updatedStack = (ingredient) => {
    // selectedIngredient = ingredient.name
    setStack([...stack, ingredient.name])
  };

  const removeBurger = (ingredient, idx) => {
    setStack(stack.filter((ingredients, i) => i !== idx))
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList 
          stockedIngredients={stockedIngredients} 
          updatedStack={updatedStack}
        />
        <BurgerStack 
          updatedStack={stack} 
          removeBurger={removeBurger}
        />
      </section>
    </main>
  );
};

export default App;
