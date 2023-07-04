import React from 'react';

export const UserWarning: React.FC = () => (
  <section className="section">
    <div className="box is-size-3">
      Please get your
      <span className="user-id highlight"> userId </span>
      <a
        href="https://mate-academy.github.io/react_student-registration"
        className="link"
      >
        here
      </a>
      <span> and save it in the app</span>
      <span className="code">const USER_ID = ...</span>

      All requests to the API must be sent with this
      <span className="user-id highlight"> userId. </span>
    </div>
  </section>
);
