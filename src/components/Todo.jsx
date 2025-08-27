import {useState} from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

export default function Todo(){
    const [todos, setTodos] = useState([])
    const allTodo = todos.length;
    const completedTodo = todos.filter(todo => todo.done).length;
    return(<div>
        <Form todos = {todos} setTodos = {setTodos}></Form>
       <TodoList todos={todos} setTodos={setTodos}/>
        <Footer allTodo={allTodo} completedTodo={completedTodo}/>
    </div>)
}