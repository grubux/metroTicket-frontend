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
  // TODO: Add quantity input
  const [discountFood, setDiscountFood] = useState(0);
  const [discountNotFood, setDiscountNotFood] = useState(0);
  const [inputList, setInputList] = useState([
    { articleName: '', price: 0, VAT: 'D', isFood: true },
  ]);

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
    const toSend = [];
    const list = [...inputList];
    toSend.push(list);
    toSend.push({ discountFood });
    toSend.push({ discountNotFood });
    console.log(toSend);
  };

  return (
    <span className="form">
      <div className="form-container">
        <DiscountInputs
          discountFood={discountFood}
          setDiscountFood={setDiscountFood}
          discountNotFood={discountNotFood}
          setDiscountNotFood={setDiscountNotFood}
        />
        {inputList.map((x, i) => {
          return (
            <div>
              <div className="flex">
                <div className="articlename-wrapper">
                  <FormControl style={{ marginTop: '5px' }}>
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
                <div className="quantity-wrapper">
                  <FormControl
                    fullWidth
                    sx={{ m: 0.3 }}
                    variant="filled"
                    style={{ width: '50%' }}
                  >
                    <InputLabel htmlFor="filled-adornment-amount">
                      Quantity
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
                </div>
              </div>
              <div className="flex">
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
                  handleIsFood={handleIsFood}
                />
                <Icons
                  index={i}
                  setInputList={setInputList}
                  inputList={inputList}
                />
              </div>
              <div className="finalprices-container">
                <FinalPrices finalPrice="0.42€" />
              </div>
            </div>
          );
        })}
      </div>
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
