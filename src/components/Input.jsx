import PropTypes from 'prop-types';
import '../styles/Input.css';

export const Input = ( {handleInputChange, inputValue, handleSave} ) => {
  return (
    <div className='input'>
      <input type="text" placeholder="add todo..." value={inputValue} onChange={handleInputChange}/>
      <button type="button" onClick={handleSave}>save</button>
    </div>
  )
}

Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Input;
