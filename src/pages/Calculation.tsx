import Input from '../components/atoms/Input';
import { useState } from 'react';

type paymentType = { id: number; price: number; seller: string };

let initialPaymentList: paymentType[] = [
  { id: 1, price: 500, seller: 'ココカラファイン' },
  { id: 2, price: 100, seller: 'べじはん' },
];

const Calculation = () => {
  //state一括定義----
  const [paymentList, setPaymentList] =
    useState<paymentType[]>(initialPaymentList);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  //各金額の入力------
  const setPriceValue = (priceValue: string, itemId: number): void => {
    const newPaymentList = paymentList.map((item) =>
      item.id === itemId
        ? { ...item, price: Number(priceValue.replace(/^0+/, '')) }
        : item
    );
    setPaymentList([...newPaymentList]);
    calcTotalPrice([...newPaymentList]);
  };

  //各購入先の入力-----
  const setSellerValue = (sellerValue: string, itemId: number): void => {
    setPaymentList(
      paymentList.map((item) =>
        item.id === itemId ? { ...item, seller: sellerValue } : item
      )
    );
  };

  //入力欄の追加-----
  const addInputField = (): void => {
    setPaymentList([
      ...paymentList,
      { id: paymentList.length + 1, price: 0, seller: '' },
    ]);
  };

  //増減額の計算-----
  const calcTotalPrice = (newPaymentList: paymentType[]): void => {
    const newTotalPrice = newPaymentList.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };
  return (
    <>
      <div>
        {paymentList.map((item, index) => {
          return (
            <div key={index}>
              <Input
                type={'number'}
                value={item.price}
                onChange={(event) => setPriceValue(event.target.value, item.id)}
              />
              <Input
                type={'text'}
                value={item.seller}
                onChange={(event) =>
                  setSellerValue(event.target.value, item.id)
                }
              />
            </div>
          );
        })}
        <span onClick={() => addInputField()}>+</span>
      </div>
      <div>
        <p>今回の増減額:{totalPrice}</p>
      </div>
    </>
  );
};
export default Calculation;
