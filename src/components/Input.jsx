import { useState } from "react";

export const Input = ( {handleInputChange, inputValue, handleSave} ) => {
  return (
    <>
      <input type="text" placeholder="add todo..." value={inputValue} onChange={handleInputChange}/>
      <button type="button" onClick={handleSave}>save</button>
    </>
  )
}

export default Input;
