import AcordionButton from '../components/atoms/AcordionButton';
import { useState } from 'react';

//type定義---------------------
type paymentDetailType = {
  id: number;
  payment: number;
  seller: string;
};
type paymentHistoryType = {
  id: number;
  date: string;
  totalPayment: number;
  paymentDetails: paymentDetailType[];
  isOpen: boolean;
};
//-------------------------------

let paymentHistoryList: paymentHistoryType[] = [
  {
    id: 1,
    date: '2022/07/02',
    totalPayment: 1200,
    paymentDetails: [
      { id: 1, payment: 280, seller: 'べじはん' },
      { id: 2, payment: 120, seller: 'ココカラファイン' },
      { id: 3, payment: 800, seller: 'OKストア' },
    ],
    isOpen: true,
  },
  {
    id: 2,
    date: '2022/07/03',
    totalPayment: 1300,
    paymentDetails: [
      { id: 1, payment: 380, seller: 'べじはん' },
      { id: 2, payment: 220, seller: 'ココカラファイン' },
      { id: 3, payment: 900, seller: 'OKストア' },
    ],
    isOpen: false,
  },
];

const Register = () => {
  const [statePaymentHistoryList, setStateaymentList] =
    useState<paymentHistoryType[]>(paymentHistoryList);
  const toggleOpenList = (index: number): void => {
    setStateaymentList(
      statePaymentHistoryList.map((list, mapIndex) =>
        index === mapIndex ? { ...list, isOpen: !list.isOpen } : list
      )
    );
  };

  return (
    <>
      <p>金額履歴</p>
      <div>
        <input
          type="text"
          name=""
          id=""
          style={{ border: '1px solid #DBE7FF' }}
        />
        <div>
          {statePaymentHistoryList.map((item, index) => {
            return (
              <ol
                key={item.id}
                style={{
                  listStyle: 'none',
                  margin: '0px',
                  padding: '0px',
                }}
              >
                <li
                  style={{
                    backgroundColor: '#ECECEC',
                    listStyle: 'none',
                    margin: '0px',
                  }}
                >
                  <AcordionButton
                    isOpen={item.isOpen}
                    onClick={() => toggleOpenList(index)}
                  />
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0px 15px',
                    }}
                  >
                    {item.date}
                  </span>
                  <span>{item.totalPayment}円</span>
                  {item.paymentDetails.map((subItem) => {
                    return (
                      item.isOpen && (
                        <ol
                          key={subItem.payment}
                          style={{
                            backgroundColor: '#FCFCFC',
                            listStyle: 'none',
                          }}
                        >
                          <li>{subItem.payment}円</li>
                          <li>{subItem.seller}</li>
                        </ol>
                      )
                    );
                  })}
                </li>
              </ol>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Register;
