/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { createUser, getUser } from '../../api/users';
import { User } from '../../types/User';

type Props = {
  setUserID: React.Dispatch<React.SetStateAction<string | number>>,
  loadedTodos: () => Promise<void>,
  userId: string | number,
};

export const Login: React.FC<Props> = ({ setUserID, userId }) => {
  const [inputEmail, setInputEmail] = useState<string>('');

  const handleGetUser = async (
    input: string,
  ) => {
    try {
      const result = await getUser(input);

      return result;
    } catch (error) {
      return error;
    }
  };

  const handleCreateUser = async (
    input: string,
  ) => {
    try {
      const result = await createUser(input, {
        name: `User-${(Math.random() * 1000).toFixed()}`,
        username: 'UserName',
        email: input,
        phone: 123456789,
      });

      return result;
    } catch (error) {
      return error;
    }
  };

  async function handleLoginForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const usersColection = await handleGetUser(inputEmail) as User | User[];

    if (userId === 0) {
      const user = await handleCreateUser(inputEmail) as User;

      if (user) {
        setUserID(user.id);
        localStorage.setItem('userId', `${user.id}`);
      }
    }

    if (Array.isArray(usersColection)) {
      setUserID(usersColection[0].id);
      localStorage.setItem('userId', `${usersColection[0].id}`);
    }

    if (usersColection && 'id' in usersColection) {
      setUserID(usersColection.id);
      localStorage.setItem('userId', `${usersColection.id}`);
    }
  }

  return (
    <section className="section">
      <form className="box mt-5" onSubmit={handleLoginForm}>
        <h1 className="title is-3">Log in to open todos</h1>
        <div className="field">
          <label className="label" htmlFor="user-email">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              id="user-email"
              value={inputEmail}
              placeholder="Enter your email"
              onChange={({ target }) => setInputEmail(target.value)}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <button type="submit" className="button is-primary">Login</button>
        </div>
      </form>
    </section>
  );
};
