import React from 'react'
import './Css/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'


//for check mark in left side of todo datas
const TodoItems = ({no,display,text,setTodos}) => {

    //for deleting the todo datas
    const deleteTodo = (no) => {
      let data = JSON.parse(localStorage.getItem("todos"));
      data = data.filter((todo) => todo.no !== no);
      setTodos(data);
    };

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"))

        for(let i=0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display="line-through"
                }else{
                    data[i].display=""
                }
                break;
            }
        }

        setTodos(data);
    }

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} alt="" className="todoitems-cross-icon" onClick={()=>{deleteTodo(no);}} />
    </div>
  );
}

export default TodoItems