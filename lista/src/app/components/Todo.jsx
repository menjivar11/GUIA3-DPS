import React, { useState } from 'react';
import styles from "../page.module.css";

const Todo = ({ todo, index, deleteTodo }) => {
  return (
      <div className={styles.list}>
        ➡️<p>{todo.cantidad}</p>
        <p>{todo.producto}</p>
        <p>marca {todo.marca}</p>
        <p>que cuestan ${todo.precio}</p>
        <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
      </div>
  );
};
export default Todo
