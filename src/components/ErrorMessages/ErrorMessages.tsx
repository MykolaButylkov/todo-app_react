import React from 'react';
import { ErrorTypes } from '../../types/ErrorTypes';

type Props = {
  errorMessage: ErrorTypes,
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorTypes | null>>
};

export const ErrorMessages: React.FC<Props> = (
  { errorMessage, setErrorMessage },
) => {
  return (
    <div className="notification is-danger is-light has-text-weight-normal">
      <button
        type="button"
        aria-label="button"
        className="delete"
        onClick={() => setErrorMessage(null)}
      />

      {errorMessage}
      <br />
    </div>
  );
};
