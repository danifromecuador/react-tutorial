import PropTypes from 'prop-types';
import '../styles/Input.css';

const Input = ( {handleInputChange, inputValue, handleSave} ) => {
  const enterHandler = (e) => {
    if (e.key === 'Enter') handleSave();
  } 
  
  return (
    <div className='input'>
      <input
         type="text"
         placeholder="add todo..."
         value={inputValue}
         onChange={handleInputChange}
         onKeyDown={enterHandler}
      />
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
