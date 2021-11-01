import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Form = (): JSX.Element => {
  const [inputList, setInputList] = useState([{ articleName: '' }]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].articleName = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { articleName: '' }]);
  };

  const handleSubmit = () => {};

  return (
    <span className="form">
      {inputList.map((x, i: number) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControl
              style={{ marginTop: '10px', width: '200px', minWidth: '200px' }}
            >
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={x.articleName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, i)
                }
                label="Name"
              />
            </FormControl>
            {inputList.length !== 1 && (
              <DeleteIcon
                style={{ margin: 'auto' }}
                onClick={() => handleRemoveClick(i)}
              />
            )}
            {inputList.length - 1 === i && (
              <AddCircleOutlineIcon
                style={{ margin: 'auto', marginLeft: '5px' }}
                onClick={() => handleAddClick()}
              />
            )}
          </div>
        );
      })}
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
