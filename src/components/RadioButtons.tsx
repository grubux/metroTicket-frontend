import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtons = ({
  index,
  handleVATType,
  handleIsFood,
}: {
  index: number;
  handleVATType: any;
  handleIsFood: any;
}): JSX.Element => {
  return (
    <div className="checkboxes-wrapper">
      <div>
        <FormControl component="fieldset">
          <FormLabel
            style={{ marginLeft: '30px', marginBottom: '3px' }}
            component="legend"
          >
            Type
          </FormLabel>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            aria-label="VAT"
            defaultValue="food"
          >
            <FormControlLabel
              style={{
                width: '2px',
                height: '2px',
              }}
              value="food"
              label={<span style={{ fontSize: '10px' }}>food</span>}
              control={<Radio onClick={() => handleIsFood(true, index)} />}
            />
            <FormControlLabel
              value="notFood"
              label={<span style={{ fontSize: '10px' }}>not&nbsp;food</span>}
              control={<Radio onClick={() => handleIsFood(false, index)} />}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel
            style={{ marginLeft: '30px', marginBottom: '5px' }}
            component="legend"
          >
            VAT
          </FormLabel>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            aria-label="VAT"
            defaultValue="20"
          >
            <FormControlLabel
              style={{
                width: '2px',
                height: '2px',
              }}
              value="5"
              label={<span style={{ fontSize: '10px' }}>5.5%</span>}
              control={<Radio onClick={() => handleVATType(false, index)} />}
            />
            <FormControlLabel
              value="20"
              label={<span style={{ fontSize: '10px' }}>20%</span>}
              control={<Radio onClick={() => handleVATType(true, index)} />}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default RadioButtons;
