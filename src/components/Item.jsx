import { useState } from 'react';
import '../styles/Item.css';

const Item = ({array, completed}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    array.map(item =>
      <li key={item.id}>
        <input type="checkbox" id={item.id} className='checkbox' onClick={completed} onChange={handleCheck} checked={item.completed}/>
        <p>{item.description}</p>
        <button type="button">edit</button>
        <button type="button">delete</button>
      </li>)
  )
}

export default Item;