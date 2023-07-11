import Header from '../components/Header';
import Logic from '../components/Logic';
import '../styles/TodoApp.css';

const TodoApp = () => {
  return (
    <div className='todoapp'>
      <Header />
      <Logic />
    </div>
  )
}

export default TodoApp;