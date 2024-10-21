// Access to list of ingredients(stockedIngredients) & updatedStack().
const IngredientList = (props) => {



    return (
      <ul>
        {props.stockedIngredients.map((ingredient, idx) => (
          <li key={idx} style={{ backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={props.updatedStack}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  