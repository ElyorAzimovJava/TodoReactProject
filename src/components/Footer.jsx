import styles from './footer.module.css'
export default function Footer({completedTodo, allTodo}){
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos : {completedTodo}</span>
            <span className={styles.item}>All Todos : {allTodo}</span>
        </div>
    )
}