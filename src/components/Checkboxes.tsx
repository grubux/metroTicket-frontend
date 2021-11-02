import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
        <FormGroup>
          <FormControlLabel
            labelPlacement="end"
            control={
              <Checkbox
                onClick={() => handleCheckboxes(checkbox5, setCheckbox5)}
              />
            }
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            label={<span style={{ fontSize: '12px' }}>VAT:5.5%</span>}
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            labelPlacement="end"
            control={
              <Checkbox
                defaultChecked
                onClick={() => handleCheckboxes(checkbox20, setCheckbox20)}
              />
            }
            label={<span style={{ fontSize: '12px' }}>VAT:20%</span>}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Icons;
