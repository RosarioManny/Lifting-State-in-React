// Have access to updatedStack and removeBurger()
const BurgerStack = (props) => {
  // const { updatedStack, removeBurger } = props 

    return (
      <ul>
        {props.updatedStack.map((ingredient, idx) => (
          <li 
            key={idx} 
          >
            {ingredient.name} 
            <button onClick={props.removeBurger}>x</button>
          </li>
      ))}
      </ul>
    );a
  };
  
  export default BurgerStack;
  