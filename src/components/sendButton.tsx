const Icons = ({ handleSubmit }: { handleSubmit: any }): JSX.Element => {
  return (
    <button
      className="send-button"
      onClick={() => {
        handleSubmit();
      }}
    >
      Send
    </button>
  );
};

export default Icons;
