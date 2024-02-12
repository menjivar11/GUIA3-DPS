"use client"
import React, { useState } from 'react';
import Todo from "./Todo";
import styles from "../page.module.css";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value }); // Agregar dinámicamente al objeto todo

  }

  const handleClick = e => {
    e.preventDefault();
    if (Object.keys(todo).length === 0 || Object.values(todo).some(value => value.trim() === '')) {
      alert('Todos los campos deben estar llenos');
      return;
    }
    setTodos([...todos, todo]);
    setTodo({});
  }

  const deleteTodo = indice => {
    const newTodos = todos.filter((_, index) => index !== indice);
    setTodos(newTodos);
  }

  return (
    <>
      <form>
        <label>Elegir Producto 🧺</label><br />
        <input className={styles.form_input} type='text' name='producto' onChange={handleChange} value={todo.producto || ''} />
        <label>Elegir Marca ®️</label><br />
        <input className={styles.form_input} type='text' name='marca' onChange={handleChange} value={todo.marca || ''} />
        <label>Elegir Cantidad 🔢</label><br />
        <input className={styles.form_input} type='text' name='cantidad' onChange={handleChange} value={todo.cantidad || ''} />
        <label>Elegir Precio 💲</label><br />
        <input className={styles.form_input} type='text' name='precio' onChange={handleChange} value={todo.precio || ''} /><br />
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>
      <br />
      {todos.map((value, index) => (
        <Todo
          key={index}
          todo={value}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
