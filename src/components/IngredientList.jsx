// Access to list of ingredients(stockedIngredients) & updatedStack().
const IngredientList = ({stockedIngredients}) => {



    return (
      <ul>
        {stockedIngredients.map((ingredient, idx) => (
          <li key={idx}>
            {ingredient.name}
            <button onClick={updatedStack} >+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  