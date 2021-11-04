import { useState } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import DiscountInputs from './DiscountInputs';
import Icons from './Icons';
import RadioButtons from './RadioButtons';
import FinalPrices from './FinalPrices';

const Form = (): JSX.Element => {
  // TODO: responsive, when on large computer screens, do not get huge inputs, haveto put a max width.
  const [discountFood, setDiscountFood] = useState(0);
  const [discountNotFood, setDiscountNotFood] = useState(0);
  const [inputList, setInputList] = useState([
    {
      articleName: '',
      price: 0,
      VATType: 'D',
      isFood: true,
      quantity: 1,
      index: 0,
    },
  ]);
  const [data, setData] = useState();

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
    list[index].index = index;

    setInputList(list);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const list = [...inputList];
    list[index].quantity = parseFloat(e.target.value);

    setInputList(list);
  };

  const handleVATType = (bool: boolean, index: number) => {
    const list = [...inputList];

    if (bool === true) {
      list[index].VATType = 'D';
    } else {
      list[index].VATType = 'B';
    }
  };

  const handleIsFood = (bool: boolean, index: number) => {
    const list = [...inputList];
    list[index].isFood = bool;
  };

  const handleSubmit = async () => {
    const url = 'http://localhost:3003/api/v1/count';
    const toSend = [];
    const list = [...inputList];
    toSend.push(list);
    toSend.push({ discountFood });
    toSend.push({ discountNotFood });

    const finalToSend = { data: toSend };
    await axios.post(url, finalToSend).then((response) => {
      setData(response.data);
      console.log('response.data: ', response.data);
    });
    console.log(finalToSend);
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
                  <TextField
                    style={{
                      width: '50%',
                      margin: 'auto',
                    }}
                    id="standard-number"
                    label="quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    defaultValue="1"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleQuantityChange(e, i)
                    }
                  />
                </div>
              </div>
              <div className="flex" style={{}}>
                <FormControl fullWidth sx={{ m: 0.3 }} variant="filled">
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
                  handleVATType={handleVATType}
                  handleIsFood={handleIsFood}
                />
                <Icons
                  index={i}
                  setInputList={setInputList}
                  inputList={inputList}
                />
              </div>
              {data && (
                <div className="finalprices-container">
                  <FinalPrices data={data} index={i} />
                </div>
              )}
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
