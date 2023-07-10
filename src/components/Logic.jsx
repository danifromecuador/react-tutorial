import Items from '../components/Items';
import Input from '../components/Input';
const Logic = () => {
  const array = localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : [];
  const updateArray = (inputValue) => {
    array.push({ id: array.length + 1, description: `${inputValue}`, completed: false });
    localStorage.setItem('array', JSON.stringify(array));
    console.log(array);
  }
  return (
    <>
    <Input updateArray={updateArray}/>
    <Items />
    </>
  )
}

export default Logic;
