import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoList } from '../TodoList';

type Props = {
  visibleTodos: Todo[],
  onRemoveTodo: (todo: Todo) => void
  onChangeStatusTodo: (todo: Todo) => void,
  idTodoForTempoTodo: number[],
  setIdTodoForTempoTodo: React.Dispatch<React.SetStateAction<number[]>>
  onEditTodo: (todo: Todo) => void
};

export const Main: React.FC<Props> = ({
  visibleTodos,
  onRemoveTodo,
  onChangeStatusTodo,
  idTodoForTempoTodo,
  setIdTodoForTempoTodo,
  onEditTodo,
}) => {
  return (
    <section className="todoapp__main">
      <TodoList
        visibleTodos={visibleTodos}
        onRemoveTodo={onRemoveTodo}
        idTodoForTempoTodo={idTodoForTempoTodo}
        onChangeStatusTodo={onChangeStatusTodo}
        setIdTodoForTempoTodo={setIdTodoForTempoTodo}
        onEditTodo={onEditTodo}
      />
    </section>
  );
};
