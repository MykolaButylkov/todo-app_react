import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  countActiveTodo: number,
  onHandleAddTodo: (
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
  ) => void,
  disabled: boolean,
  onChangeStatusAllTodo: () => Promise<void>,
  haveNotTodos: boolean,
};

export const Header: React.FC<Props> = ({
  countActiveTodo,
  onHandleAddTodo,
  disabled,
  onChangeStatusAllTodo,
  haveNotTodos,
}) => {
  const [input, setInput] = useState('');

  const onChangeInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInput(value);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onHandleAddTodo(input, setInput);
  }

  return (
    <header className="todoapp__header">
      <button
        type="button"
        aria-label="button"
        className={
          cn(
            'todoapp__toggle-all',
            { active: countActiveTodo > 0 },
          )
        }
        onClick={onChangeStatusAllTodo}
        style={{ visibility: haveNotTodos ? 'hidden' : 'visible' }}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={onChangeInput}
          disabled={disabled}
        />
      </form>
    </header>
  );
};
