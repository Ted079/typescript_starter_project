import React, { useMemo } from "react";
import { TodoContext } from "./TodoContext";
import { DEFAULT_TODO_LIST } from "../../utils/todoData";

interface TodoProvidorProps {
  children: React.ReactNode;
}

export const TodoProvidor: React.FC<TodoProvidorProps> = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>(DEFAULT_TODO_LIST);
  const [idForEdit, setIdForEdit] = React.useState<Todo["id"] | null>(null);

  const selectedId = (id: Todo["id"]) => {
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

  const changeTodo = (todos: Omit<Todo, "id" | "checked">) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === idForEdit) {
          return { ...todo, name: todos.name, description: todos.description };
        } else {
          return todo;
        }
      });
    });
    setIdForEdit(null);
  };

  const value = React.useMemo(
    () => ({
      selectedId,
      todos,
      changeTodo,
      idForEdit,
      deleteTodo,
      addTodo,
      checkTodo,
    }),
    [selectedId, todos, changeTodo, idForEdit, deleteTodo, addTodo, checkTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
