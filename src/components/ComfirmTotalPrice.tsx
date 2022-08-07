import Button from '../components/atoms/Button';
type Props = {
  totalPrice?: number;
  initialTotalPrice?: number;
};

const ComfirmTotalPrice = (props: Props) => {
  return (
    <>
      <div
        style={{
          width: '100%',
        }}
      >
        <p>加算前の合計金額{props.initialTotalPrice}</p>
        <p>加算後の金額{props.totalPrice}</p>
        <Button text={'確定'}></Button>
      </div>
    </>
  );
};
export default ComfirmTotalPrice;
