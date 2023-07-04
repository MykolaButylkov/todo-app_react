import React, { FC } from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  visibleTodos: Todo[],
  onRemoveTodo: (todo: Todo) => void
  onChangeStatusTodo: (todo: Todo) => void,
  idTodoForTempoTodo: number[],
  setIdTodoForTempoTodo: React.Dispatch<React.SetStateAction<number[]>>
  onEditTodo: (todo: Todo) => void
};

export const TodoList: FC<Props> = ({
  visibleTodos,
  onRemoveTodo,
  onChangeStatusTodo,
  idTodoForTempoTodo,
  setIdTodoForTempoTodo,
  onEditTodo,
}) => {
  return (
    <>
      {visibleTodos.map((todo) => {
        // adding tempo todo with loader
        if (idTodoForTempoTodo.includes(todo.id)) {
          return (
            <div className="todo" key={`todoTempo-${todo.id}`}>
              <label className="todo__status-label" htmlFor="todoStatusCheckbox">
                <input
                  id="todoStatusCheckbox"
                  type="checkbox"
                  className="todo__status"
                />
              </label>
              <span
                className="todo__title"
              >
                {todo.title}
              </span>
              <button
                type="button"
                className="todo__remove"
              >
                ×
              </button>

              <div className="modal overlay is-active">
                <div className="modal-background has-background-white-ter" />
                <div className="loader" />
              </div>
            </div>
          );
        }

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onChangeStatusTodo={onChangeStatusTodo}
            setIdTodoForTempoTodo={setIdTodoForTempoTodo}
            onEditTodo={onEditTodo}
          />
        );
      })}
    </>
  );
};
