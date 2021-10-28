// @ts-nocheck
import { useState, ChangeEvent } from 'react';

const Form = (): JSX.Element => {
  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }
  const [input, setInput] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };
  const spaceOrNewline = new RegExp(/[\s\n]+/gm);

  const handleSubmit = () => {};

  return (
    <span className="form">
      <textarea
        className="textarea"
        name="site"
        placeholder="Enter your keywords"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event)
        }
      />

      <button
        className="send-button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Send
      </button>
    </span>
  );
};

export default Form;
