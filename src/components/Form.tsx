import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

import Icons from './Icons';
import Checkboxes from './Checkboxes';

const Form = (): JSX.Element => {
  const [inputList, setInputList] = useState([{ articleName: '', price: 0 }]);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox20, setCheckbox20] = useState(true);

  const handleInputNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].articleName = value;
    setInputList(list);
  };

  const handleInputPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const onlyNums = e.target.value;
    // .replace(/^[1-9.]\d*(\d+)?$/i, '');

    const list = [...inputList];
    list[index].price = parseFloat(onlyNums);

    setInputList(list);
  };

  const handleSubmit = () => {};

  return (
    <span className="form">
      {inputList.map((x, i) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div>
                <FormControl style={{ marginTop: '10px', width: '100%' }}>
                  <InputLabel htmlFor="component-outlined">name</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    value={x.articleName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputNameChange(e, i)
                    }
                    label="Name"
                  />
                </FormControl>
              </div>
              <div style={{ display: 'flex' }}>
                <FormControl
                  fullWidth
                  sx={{ m: 0.3 }}
                  variant="filled"
                  style={{ width: '100%' }}
                >
                  <InputLabel htmlFor="filled-adornment-amount">
                    Price
                  </InputLabel>
                  <FilledInput
                    type="number"
                    id="filled-adornment-amount"
                    value={x.price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputPriceChange(e, i)
                    }
                    startAdornment={
                      <InputAdornment position="start">€</InputAdornment>
                    }
                  />
                </FormControl>

                <Checkboxes
                  checkbox5={checkbox5}
                  setCheckbox5={setCheckbox5}
                  checkbox20={checkbox20}
                  setCheckbox20={setCheckbox20}
                />
                <Icons
                  index={i}
                  setInputList={setInputList}
                  inputList={inputList}
                />
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
