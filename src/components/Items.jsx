import Item from '../components/Item';

const Items = () => {
  const ItemsArray = [
    { id: 1, name: 'Item 1', completed: false },
    { id: 2, name: 'Item 2', completed: false },
    { id: 3, name: 'Item 3', completed: false },
  ];
  return (
    <ul>
      <Item ItemsArray={ItemsArray}/>
    </ul>
  )
}

export default Items;
