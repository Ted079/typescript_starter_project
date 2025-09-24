import React, { useState } from "react";
import styles from "./App.module.css";
import { DEFAULT_TODO_LIST } from "./utils/todoData";
import Header from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>(DEFAULT_TODO_LIST);
  const [idForEdit, setIdForEdit] = React.useState<Todo["id"] | null>(null);

  const selectedIdForEdit = (id: Todo["id"]) => {
    setIdForEdit(id);
  };

  console.log(idForEdit);

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos((prev) => {
      const newId = prev.length ? prev[prev.length - 1].id + 1 : 1;
      const updatedTodo: Todo = {
        id: newId,
        name,
        description,
        checked: false,
      };
      return [...prev, updatedTodo];
    });
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === idForEdit) {
          return { ...todo, name, description };
        } else {
          return todo;
        }
      })
    );
    setIdForEdit(null);
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} mode="add" />
        <TodoList
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectedIdForEdit={selectedIdForEdit}
          idForEdit={idForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
