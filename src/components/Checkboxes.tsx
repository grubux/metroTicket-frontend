import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Icons = ({
  checkbox5,
  setCheckbox5,
  checkbox20,
  setCheckbox20,
}: {
  checkbox5: boolean;
  setCheckbox5: any;
  checkbox20: boolean;
  setCheckbox20: any;
}): JSX.Element => {
  const handleCheckboxes = (bool: boolean, setBool: any): void => {
    setBool(!bool);
    console.log(!bool);
  };

  return (
    <div className="checkboxes-wrapper">
      <div>
        <FormControl component="fieldset">
          <FormLabel style={{ marginLeft: '30px' }} component="legend">
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
                width: '3px',
                height: '3px',
              }}
              value="5"
              label={<span style={{ fontSize: '10px' }}>VAT:5.5%</span>}
              control={
                <Radio
                  onClick={() => handleCheckboxes(checkbox5, setCheckbox5)}
                />
              }
            />
            <FormControlLabel
              value="20"
              control={
                <Radio
                  defaultChecked
                  onClick={() => handleCheckboxes(checkbox20, setCheckbox20)}
                />
              }
              label={<span style={{ fontSize: '10px' }}>VAT:20%</span>}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Icons;
