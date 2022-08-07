import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/Button';

const DashBoard = (props: any) => {
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const navigate = useNavigate();
  //日付計算---------
  const today = new Date();
  const year = today.getFullYear();
  const week = today.getDay();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];
  const formatDate = `${year}/${month}/${day}(${dayOfTheWeek[week]})`;
  //-------------------
  //支払金額の取得-----

  // const fetchTotalPrice = () => {
  //   //TODO:DBから金額を取得する
  // };

  //-------------------
  //-------
  const executeClosing = () => {
    const confirm = window.confirm('月締めを実行しても宜しいでしょうか');
    if (confirm) {
      console.log('月締め実行');
    }
  };
  return (
    <>
      <div>DashBoard</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button text="月締め" onClick={() => executeClosing()} />
        <div
          style={{
            border: '1px solid #DDD',
            margin: '20px',
            padding: '20px',
          }}
        >
          {formatDate} <br /> 今月のまさへの支払い金額 <br />
          2000円
        </div>
        <Button
          text="金額を入力する"
          onClick={() => navigate('/calculation/')}
        />
      </div>
    </>
  );
};

export default DashBoard;
