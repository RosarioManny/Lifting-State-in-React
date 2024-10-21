// Access to list of ingredients(stockedIngredients) & addBurgers().
const IngredientList = (props) => {

    return (
      <ul>
        {props.stockedIngredients.map((ingredient, idx) => (
          <li 
          key={idx} 
          style={{ background: ingredient.color}}
          onClick={() => props.addBurger(ingredient, idx)}
          >
            {ingredient.name}
            <button>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  