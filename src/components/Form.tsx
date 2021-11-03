import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

import DiscountInputs from './DiscountInputs';
import Icons from './Icons';
import RadioButtons from './RadioButtons';
import FinalPrices from './FinalPrices';

const Form = (): JSX.Element => {
  const [discountFood, setDiscountFood] = useState(0);
  const [discountNotFood, setDiscountNotFood] = useState(0);
  const [inputList, setInputList] = useState([
    { articleName: '', price: 0, VAT: 'D', isFood: true },
  ]);
  const [isFood, setIsFood] = useState(false);

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
    const list = [...inputList];
    list[index].price = parseFloat(e.target.value);

    setInputList(list);
  };

  const handleVAT = (bool: boolean, index: number) => {
    const list = [...inputList];

    if (bool === true) {
      list[index].VAT = 'D';
    } else {
      list[index].VAT = 'B';
    }
  };

  const handleIsFood = (bool: boolean, index: number) => {
    const list = [...inputList];
    list[index].isFood = bool;
  };

  const handleSubmit = () => {
    console.log(inputList);
  };

  return (
    <span className="form">
      <DiscountInputs
        discountFood={discountFood}
        discountNotFood={discountNotFood}
        setDiscountFood={setDiscountFood}
        setDiscountNotFood={setDiscountNotFood}
      />
      {inputList.map((x, i) => {
        return (
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '95%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <div>
                  <FormControl style={{ marginTop: '5px', width: '100%' }}>
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

                  <RadioButtons
                    index={i}
                    handleVAT={handleVAT}
                    setIsFood={setIsFood}
                    handleIsFood={handleIsFood}
                  />
                  <Icons
                    index={i}
                    setInputList={setInputList}
                    inputList={inputList}
                  />
                </div>
                <div
                  style={{
                    margin: 'auto 0',
                    fontSize: '20px',
                  }}
                >
                  <FinalPrices finalPrice="0.42€" />
                </div>
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
