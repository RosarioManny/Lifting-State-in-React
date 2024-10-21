// Access to list of ingredients(stockedIngredients) & updatedStack().
const IngredientList = (props) => {

    return (
    <ul>
      {props.stockedIngredients.map((ingredient) => (
        <li key={ingredient.name} >
          {ingredient.name}
          <button>+</button>
        </li>
      ))}
    </ul>
    );
  };
  
  export default IngredientList;
  