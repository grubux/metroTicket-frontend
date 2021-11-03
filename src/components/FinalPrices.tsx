import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FinalPrices = ({ finalPrice }: { finalPrice: string }): JSX.Element => {
  return (
    <div className="final-price">
      =&nbsp;{finalPrice} <ArrowUpwardIcon />
    </div>
  );
};

export default FinalPrices;
