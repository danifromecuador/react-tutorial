import Item from '../components/Item';

const Items = ({array}) => {
  return (
    <ul>
      <Item array={array}/>
    </ul>
  )
}

export default Items;
