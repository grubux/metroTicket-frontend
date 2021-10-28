import { useState, ChangeEvent } from 'react';

const Form = (): JSX.Element => {
  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }
  const [input, setInput] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = () => {};

  return (
    <span className="form">
      <textarea
        className="textarea"
        name="site"
        placeholder="Enter your keywords"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInputChange(e)
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
