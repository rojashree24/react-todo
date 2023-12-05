import React,{useState,useEffect,useRef} from 'react'
import './Css/Todo.css'
import TodoItems from './TodoItems';

let count=0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addFun = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = ""; //clear the value in input field after clicking add

    //update the no in console (ie) localstorage
    localStorage.setItem("todos_count",count)
  };

  //after refreshing the todos datas wont get deleted
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));

    //update the no in console (ie) localstorage
    count=localStorage.getItem("todos_count")
  }, []);

  //update the value of todos
  useEffect(() => {

    setTimeout(() => {
        console.log(todos);

        //   when the todos gets updated , create local storage to store todos
        localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
    
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add task..."
          className="todo-input"
        />
        <div
          onClick={() => {
            addFun();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {/* generate todoitems */}
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo