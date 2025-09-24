import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import TodoPanel from "../TodoPanel/TodoPanel";

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: number) => void;
  selectedIdForEdit: (id: Todo["id"]) => void;
  idForEdit: Todo["id"] | null;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  idForEdit,
  checkTodo,
  deleteTodo,
  selectedIdForEdit,
  changeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === idForEdit)
          return (
            <TodoPanel
              mode="edit"
              changeTodo={changeTodo}
              key={todo.id}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            selectedIdForEdit={selectedIdForEdit}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
