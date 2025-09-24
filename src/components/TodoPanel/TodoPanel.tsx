import React, {
  useState,
  type ChangeEvent,
  type HtmlHTMLAttributes,
} from "react";
import styles from "./TodoPanel.module.css";
import { Button } from "../Button/Button";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodosPanelProps {
  mode: "add";
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

interface EditTodosPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

type TodosPanelProps = AddTodosPanelProps | EditTodosPanelProps;

const TodoPanel: React.FC<TodosPanelProps> = (props) => {
  const isEdit = props.mode === "edit";

  const [todos, setTodos] = React.useState(
    isEdit ? props.editTodo : DEFAULT_TODO
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodos({ ...todos, [name]: value });
  };

  const onClick = () => {
    const itemTodo = { name: todos.name, description: todos.description };
    if (isEdit) {
      props.changeTodo(itemTodo);
    } else {
      props.addTodo(itemTodo);
      setTodos(DEFAULT_TODO);
    }
  };

  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.fields_container}>
        <div className={styles.field_container}>
          <label htmlFor="name">
            Name
            <input
              type="name"
              name="name"
              value={todos.name}
              onChange={handleChange}
              placeholder=""
            />
          </label>
        </div>
        <div className={styles.field_container}>
          <label htmlFor="name">
            Description
            <input
              type="text"
              name="description"
              value={todos.description}
              onChange={handleChange}
              placeholder=""
            />
          </label>
        </div>
      </div>
      <div className={styles.button_container}>
        {!isEdit && (
          <Button onClick={onClick} color="blue">
            ADD
          </Button>
        )}
        {isEdit && (
          <Button onClick={onClick} color="red">
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoPanel;
