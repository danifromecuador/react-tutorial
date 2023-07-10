import Items from "./Items"

const Item = ({ ItemsArray }) => {
  return (
    ItemsArray.map(item =>
      <li key={item.id}>
        <input type="checkbox" name="" id="" />
        <span>{item.name}</span>
        <button type="button">edit</button>
        <button type="button">delete</button>
      </li>)
  )
}

export default Item;