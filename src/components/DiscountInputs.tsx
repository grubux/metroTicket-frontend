import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

const DiscountInputs = ({
  rawDiscountFood,
  setRawDiscountFood,
  rawDiscountNotFood,
  setRawDiscountNotFood,
}: {
  rawDiscountFood: string;
  setRawDiscountFood: any;
  rawDiscountNotFood: string;
  setRawDiscountNotFood: any;
}): JSX.Element => {
  const handleRawDiscountFood = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRawDiscountFood(e.target.value);
  };

  const handleDiscountNotFood = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRawDiscountNotFood(e.target.value);
  };

  return (
    <div className="discountinputs-container">
      <span className="flex">
        <FormControl fullWidth sx={{ m: 0.3 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Food discount
          </InputLabel>
          <FilledInput
            placeholder="ex: 15"
            type="number"
            id="filled-adornment-amount"
            // value={rawDiscountFood}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleRawDiscountFood(e)
            }
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
      </span>
      <span>
        <FormControl fullWidth sx={{ m: 0.3 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            not food discount
          </InputLabel>
          <FilledInput
            placeholder="ex: 13"
            type="number"
            id="filled-adornment-amount"
            // value={rawDiscountNotFood}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDiscountNotFood(e)
            }
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
      </span>
    </div>
  );
};

export default DiscountInputs;
