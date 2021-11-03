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
  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>): void => {};

  return (
    <div
      style={{
        display: 'flex',
        width: '70%',
        marginBottom: '2%',
        justifyContent: 'center',
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
              handleDiscount(e)
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
            value={discountFood}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDiscount(e)
            }
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
        </FormControl>
      </span>
    </div>
  );
};

export default DiscountInputs;
