import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FinalPrices = ({
  data,
  index,
}: {
  data: any;
  index: number;
}): JSX.Element => {
  const handleFinalPrices = (data: any, i: number) => {
    return data?.map((finalItem: any) => {
      return finalItem?.index === i && finalItem?.articleFinalPrice2decim;
    });
  };

  const finalPrice = handleFinalPrices(data, index);

  return (
    <div className="final-price">
      =&nbsp;
      {finalPrice}
      <ArrowUpwardIcon />
    </div>
  );
};

export default FinalPrices;
