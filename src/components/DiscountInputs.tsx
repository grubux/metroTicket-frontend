import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

const DiscountInputs = ({
  discountFood,
  setDiscountFood,
  discountNotFood,
  setDiscountNotFood,
}: {
  discountFood: number;
  setDiscountFood: any;
  discountNotFood: number;
  setDiscountNotFood: any;
}): JSX.Element => {
  // const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>): void => {};
  const handleDiscountFood = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDiscountFood(parseFloat(e.target.value));
  };

  const handleDiscountNotFood = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDiscountNotFood(parseFloat(e.target.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '60%',
        margin: 'auto auto 2% auto',

        justifyContent: 'center',
        backgroundColor: 'blue',
      }}
    >
      <span style={{ display: 'flex' }}>
        <FormControl fullWidth sx={{ m: 0.3 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Food discount
          </InputLabel>
          <FilledInput
            type="number"
            id="filled-adornment-amount"
            value={discountFood}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDiscountFood(e)
            }
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
        </FormControl>
      </span>
      <span>
        <FormControl fullWidth sx={{ m: 0.3 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            not food discount
          </InputLabel>
          <FilledInput
            type="number"
            id="filled-adornment-amount"
            value={discountNotFood}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDiscountNotFood(e)
            }
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
        </FormControl>
      </span>
    </div>
  );
};

export default DiscountInputs;
