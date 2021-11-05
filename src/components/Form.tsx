import { useEffect } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import {
  handleInputNameChange,
  handleInputPriceChange,
  handleQuantityChange,
  handleIsFood,
  handleVATType,
} from './Handlers';
import DiscountInputs from './DiscountInputs';
import Icons from './Icons';
import RadioButtons from './RadioButtons';
import FinalPrices from './FinalPrices';

const Form = ({
  data,
  rawInputList,
  setRawInputList,
  rawDiscountFood,
  setRawDiscountFood,
  rawDiscountNotFood,
  setRawDiscountNotFood,
}: {
  data: any;
  rawInputList: any;
  setRawInputList: any;
  rawDiscountFood: any;
  setRawDiscountFood: any;
  rawDiscountNotFood: any;
  setRawDiscountNotFood: any;
}): JSX.Element => {
  // TODO: responsive, justified-content inputs blocks : left wall

  useEffect(() => {
    const rawList = [...rawInputList];
    rawList.push({
      articleName: '',
      price: '',
      VATType: 'D',
      isFood: true,
      quantity: 1,
      index: 0,
    });
    setRawInputList(rawList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="form max-width-margin">
      <div className="">
        <DiscountInputs
          rawDiscountFood={rawDiscountFood}
          setRawDiscountFood={setRawDiscountFood}
          rawDiscountNotFood={rawDiscountNotFood}
          setRawDiscountNotFood={setRawDiscountNotFood}
        />
        {rawInputList.map((x: any, i: number) => {
          return (
            <div>
              <div className="flex-start">
                <div className="articlename-wrapper">
                  <FormControl style={{ marginTop: '5px' }}>
                    <InputLabel htmlFor="component-outlined">name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      value={x.articleName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputNameChange(
                          e,
                          i,
                          rawInputList,
                          setRawInputList
                        )
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
                      handleQuantityChange(e, i, rawInputList, setRawInputList)
                    }
                  />
                </div>
              </div>
              <div className="flex">
                <FormControl fullWidth sx={{ m: 0.1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">
                    Price
                  </InputLabel>
                  <FilledInput
                    type="number"
                    id="filled-adornment-amount"
                    value={x.price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputPriceChange(
                        e,
                        i,
                        rawInputList,
                        setRawInputList
                      )
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
                  rawInputList={rawInputList}
                />
                <Icons
                  index={i}
                  setRawInputList={setRawInputList}
                  rawInputList={rawInputList}
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
    </span>
  );
};

export default Form;
