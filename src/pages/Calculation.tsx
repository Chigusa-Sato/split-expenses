import Input from '../components/atoms/Input';
import { useState, useEffect } from 'react';

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
  //boolean型のstateを作成
  const [update, setUpdata] = useState<boolean>(false);

  //各金額の入力------
  const setPriceValue = (priceVal: string, itemId: number): void => {
    let pettern = /^([1-9]\d*|0)$/;
    //@ts-ignore
    if (pettern.test(Number(priceVal))) {
      const formattedPriceVal: number = Number(priceVal.replace(/^0+/, ''));

      const newPaymentList = paymentList.map((item) =>
        item.id === itemId ? { ...item, price: formattedPriceVal } : { ...item }
      );
      setPaymentList([...newPaymentList]);
      calcTotalPrice([...newPaymentList]);
    }

    //レンダリングしたい場所でこれを差し込むだけ
    setUpdata(update ? false : true);
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
  //useEffectにてマウント後に実行したい処理を記載
  useEffect(() => {
    console.log('mounted');
    setTotalPrice(paymentList.reduce((sum, item) => sum + item.price, 0));
  }, []);
  return (
    <>
      <div>
        {paymentList.map((item, index) => {
          return (
            <div key={index}>
              <Input
                type={'text'}
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
