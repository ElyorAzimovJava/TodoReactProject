import {useState} from "react";
import styles from "./form.module.css"
export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo("")
    }
    return (
        <div>
            <form className={styles.todoForm} onSubmit={handleSubmit}>
              <div className={styles.displayContainer}>
                  <input placeholder="Enter todo item" className={styles.modelInput} type="text"  value={todo} onChange={(e) => setTodo(e.target.value)}/>
                  <button className={styles.modernButton} type="submit">Submit</button>
              </div>

            </form>
        </div>
    )
}