const IngredientList = (props) => {

  const addToStack = () => {
    return("hello")
  };

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
  