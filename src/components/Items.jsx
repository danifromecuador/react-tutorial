import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/Items.css';

const Items = ({array}) => {
  return (
    <ul>
      <Item array={array}/>
    </ul>
  )
}

Items.propTypes = {
  array: PropTypes.array.isRequired,
};

export default Items;
