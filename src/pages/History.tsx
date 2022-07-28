import AcordionButton from '../components/atoms/AcordionButton';
import { useState } from 'react';

//useState練習------------------
// const TestState = (): any => {
//   const [count, setCount] = useState(0);
//   return <div onClick={() => setCount(count + 1)}>{count}</div>;
// };
//-------------------------------

let paymentList = [
  {
    id: 1,
    date: '2022/07/02',
    totalPayment: 1200,
    paymentDetails: [
      { payment: 280, seller: 'べじはん' },
      { payment: 120, seller: 'ココカラファイン' },
      { payment: 800, seller: 'OKストア' },
    ],
    isOpen: true,
  },
  {
    id: 2,
    date: '2022/07/03',
    totalPayment: 1300,
    paymentDetails: [
      { payment: 380, seller: 'べじはん' },
      { payment: 220, seller: 'ココカラファイン' },
      { payment: 900, seller: 'OKストア' },
    ],
    isOpen: false,
  },
];

const Register = () => {
  const [state_paymentList, state_toggleOpenList] = useState(paymentList);
  const toggleOpenList = (index: number) => {
    //@ts-ignore
    state_toggleOpenList(
    //   @ts-ignore
      state_paymentList.map((list, mapIndex) =>
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
          {state_paymentList.map((item, index) => {
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
        {/* <TestState /> */}
      </div>
    </>
  );
};

export default Register;
