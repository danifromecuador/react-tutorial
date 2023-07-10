import Items from '../components/Items';
import Input from '../components/Input';
const Logic = () => {
  const array = [];
  const updateArray = (inputValue) => {
    array.push(inputValue);
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