const Item = ({array}) => {
  return (
    array.map(item =>
      <li key={item.id}>
        <input type="checkbox" name="" id="" />
        <span>{item.description}</span>
        <button type="button">edit</button>
        <button type="button">delete</button>
      </li>)
  )
}

export default Item;