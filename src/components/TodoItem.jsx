import styles from './todoItem.module.css'
export default function TodoItem({item ,todos, setTodos}) {
  function handleDelete(item){
 setTodos( todos.filter(todo => todo !== item))
  }
  function handleClick(item){
      setTodos(
          todos.map(todo => item.name === todo.name ? {...todo, done : !item.done} : todo)
      )
  }
  const className = item.done ? styles.complete : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={className} onClick={()=> handleClick(item)}>
                     {item.name}
                </span>
                <span>
                <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button>
            </span>
            </div>

            <hr className={styles.line}/>
        </div>
    )

}