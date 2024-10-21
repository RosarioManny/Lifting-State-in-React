// Have access to updatedStack and removeBurger()
const BurgerStack = (props) => {

    return (
      <ul>
        {props.stack.map((ingredient, idx) => (
          <li key={idx}>
            {ingredient.name}
            <button onClick={props.removeBurger}>-</button>
          </li>
      ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  