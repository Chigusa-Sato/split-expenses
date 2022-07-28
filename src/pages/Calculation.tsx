import Input from '../components/atoms/Input';
import { useState } from 'react';

const Calculation = () => {
  //支払金額欄のバインディング用
  const [priceValue, setPriceValue] = useState('');
  //購入先のバインディング用
  const [sellerValue, setSellerValue] = useState('');

  return (
    <>
      <Input
        value={priceValue}
        onInput={(event) => setPriceValue(event.target.value)}
      />
      <Input
        value={sellerValue}
        onInput={(event) => setSellerValue(event.target.value)}
      />
    </>
  );
};
export default Calculation;
