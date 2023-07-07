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
    let result;

    try {
      result = await getUser(input);

      return result;
    } catch (error) {
      return error;
    }
  };

  const handleCreateUser = async (
    input: string,
  ) => {
    let result;

    try {
      result = await createUser(input, {
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
      <div className="box is-size-3">
        <h1>Log in to open todos</h1>
        <span className="highlight">Email</span>
        <form onSubmit={handleLoginForm}>
          <input
            type="email"
            value={inputEmail}
            placeholder="Enter your email"
            onChange={({ target }) => setInputEmail(target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};
