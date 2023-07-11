import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/Items.css';

const Items = ({array, completed}) => {
  return (
    <ul>
      <Item array={array} completed={completed}/>
    </ul>
  )
}



Items.propTypes = {
  array: PropTypes.array.isRequired,
  completed: PropTypes.func.isRequired,
};

export default Items;
