// Have access to stack and removeBurger()
import '../App.css'

const BurgerStack = (props) => {

    return (
      <ul>
        {props.stack.map((ingredient, idx) => (
          <li 
            key={idx}
            style={{ background: ingredient.color}}
            onClick={() => props.removeBurger(ingredient, idx)}
          >
            {ingredient.name} 
            <button>X</button>
          </li>
      ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  