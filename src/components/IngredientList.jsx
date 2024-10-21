const IngredientList = (props) => {

  // const availableIngredients = () => {
  //   console.log(ingredients)
  // }

    return (
    <ul>
      {props.stockedIngredients.map((ingredient) => (
        <li key={ingredient.name} >
          {ingredient.name}
        </li>
      ))}
    </ul>
    );
  };
  
  export default IngredientList;
  