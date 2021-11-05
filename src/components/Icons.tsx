import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Icons = ({
  index,
  setRawInputList,
  rawInputList,
}: {
  index: number;
  setRawInputList: any;
  rawInputList: { articleName: string }[];
}): JSX.Element => {
  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const rawList = [...rawInputList];

    rawList.splice(index, 1);
    setRawInputList(rawList);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setRawInputList([
      ...rawInputList,
      {
        articleName: '',
        price: '',
        VATType: 'D',
        isFood: true,
        quantity: 1,
        index: index + 1,
      },
    ]);
  };

  return (
    <div className="icons-wrapper">
      <div>
        {rawInputList.length !== 1 && (
          <DeleteIcon onClick={() => handleRemoveClick(index)} />
        )}
      </div>
      <div className="icon-add">
        {rawInputList.length - 1 === index && (
          <AddCircleOutlineIcon onClick={() => handleAddClick()} />
        )}
      </div>
    </div>
  );
};

export default Icons;
