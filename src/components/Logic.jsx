import Items from '../components/Items';
import Input from '../components/Input';
import { useState } from 'react';
import '../styles/Logic.css';

const Logic = () => {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState(JSON.parse(localStorage.getItem('array')) || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (inputValue !== '') {
      array.push({ id: array.length + 1, description: `${inputValue}`, completed: false });
      setArray(array);
      localStorage.setItem('array', JSON.stringify(array));
      console.log(array);
      setInputValue('');
    }
  };

  return (
    <div className='logic'>
      <Input handleSave={handleSave} handleInputChange={handleInputChange} inputValue={inputValue} />
      <Items array={array} />
    </div>
  )
}

export default Logic;
