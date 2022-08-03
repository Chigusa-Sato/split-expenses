import React from 'react';

type Props = {
  totalPrice?: number;
};

const ComfirmTotalPrice = (props: Props) => {
  return (
    <>
      <div>ComfirmTotalPrice</div>
      加算前の金額と加算後の金額
      {props.totalPrice}
    </>
  );
};
export default ComfirmTotalPrice;
