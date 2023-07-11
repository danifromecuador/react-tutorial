import Items from '../components/Items';
import Input from '../components/Input';
import { useState } from 'react';
import '../styles/Logic.css';

const Logic = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkedValue, setCheckedValue] = useState(false);
  const [array, setArray] = useState(JSON.parse(localStorage.getItem('array')) || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (inputValue) {
      array.push({ id: array.length + 1, description: `${inputValue}`, completed: false });
      setArray(array);
      localStorage.setItem('array', JSON.stringify(array));
      setInputValue('');
    }
  };

  const completed = (event) => {
    const index = event.target.id - 1;
    array[index].completed = !array[index].completed;
    setArray(array);
    localStorage.setItem('array', JSON.stringify(array));
    setCheckedValue(array[index].completed);
    console.log(checkedValue);
  };

  return (
    <div className='logic'>
      <Input handleSave={handleSave} handleInputChange={handleInputChange} inputValue={inputValue} />
      <Items array={array} completed={completed}/>
    </div>
  )
}

export default Logic;
