import Input from '../components/atoms/Input';
import { useState } from 'react';

type paymentListType = { id: number; price: number; seller: string };
let initialPaymentList: paymentListType[] = [
  { id: 1, price: 500, seller: 'ココカラファイン' },
  { id: 2, price: 100, seller: 'べじはん' },
];

const Calculation = () => {
  //入力情報を一括で持つ配列オブジェクト
  const [paymentList, setPaymentList] =
    useState<paymentListType[]>(initialPaymentList);

  //@ts-ignore
  const setPriceValue = (priceValue: string, itemId: number) => {
    setPaymentList(
      //@ts-ignore
      paymentList.map((item) =>
        item.id === itemId
          ? { ...item, price: priceValue.replace(/^0+/, '') }
          : item
      )
    );
  };

  //@ts-ignore
  const setSellerValue = (sellerValue: string, itemId: number) => {
    setPaymentList(
      paymentList.map((item) =>
        item.id === itemId ? { ...item, seller: sellerValue } : item
      )
    );
  };

  //合計金額表示:支払金額更新毎に合わせて合計値も更新
  const [totalPrice, setTotalPrice] = useState<number>(0);

  //入力欄の追加
  const addInputField = () => {
    setPaymentList([
      ...paymentList,
      { id: paymentList.length + 1, price: 0, seller: '' },
    ]);
  };

  return (
    <>
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
              onChange={(event) => setSellerValue(event.target.value, item.id)}
            />
          </div>
        );
      })}
      <span onClick={() => addInputField()}>+</span>
    </>
  );
};
export default Calculation;
