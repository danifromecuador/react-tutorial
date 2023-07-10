import { useState } from "react";

export const Input = ({ updateArray }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    console.log(inputValue);
    updateArray(inputValue);
    setInputValue('');
  };

  return (
    <>
      <input type="text" placeholder="add todo..." value={inputValue} onChange={handleInputChange}/>
      <button type="button" onClick={handleSave}>save</button>
    </>
  )
}

export default Input;
