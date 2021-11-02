import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Icons = ({
  index,
  setInputList,
  inputList,
}: {
  index: number;
  setInputList: any;
  inputList: { articleName: string }[];
}): JSX.Element => {
  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];

    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { articleName: '' }]);
  };

  return (
    <div className="icons-wrapper">
      <div>
        {inputList.length !== 1 && (
          <DeleteIcon onClick={() => handleRemoveClick(index)} />
        )}
      </div>
      <div style={{ marginLeft: '10px' }}>
        {inputList.length - 1 === index && (
          <AddCircleOutlineIcon onClick={() => handleAddClick()} />
        )}
      </div>
    </div>
  );
};

export default Icons;
