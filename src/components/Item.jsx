import '../styles/Item.css';

const Item = ({array}) => {
  return (
    array.map(item =>
      <li key={item.id}>
        <input type="checkbox" name="" id="" className='checkbox' />
        <p>{item.description}</p>
        <button type="button">edit</button>
        <button type="button">delete</button>
      </li>)
  )
}

export default Item;