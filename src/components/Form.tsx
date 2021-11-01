import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EuroIcon from '@mui/icons-material/Euro';

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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <FormControl
                  style={{ marginTop: '10px', width: '60%', minWidth: '60%' }}
                >
                  <InputLabel htmlFor="component-outlined">name</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    value={x.articleName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, i)
                    }
                    label="Name"
                  />
                </FormControl>
              </div>
              <div style={{ display: 'flex' }}>
                <div>
                  <FormControl
                    style={{
                      marginTop: '10px',
                      width: '90px',
                      minWidth: '100px',
                    }}
                  >
                    <InputLabel htmlFor="component-outlined">price</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      value={x.articleName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(e, i)
                      }
                      label="Name"
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="icons-wrapper">
              <div>
                <EuroIcon />
              </div>
              <div>
                {inputList.length !== 1 && (
                  <DeleteIcon onClick={() => handleRemoveClick(i)} />
                )}
              </div>
              <div>
                {inputList.length - 1 === i && (
                  <AddCircleOutlineIcon onClick={() => handleAddClick()} />
                )}
              </div>
            </div>
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
