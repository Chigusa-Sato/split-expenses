import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';

const DashBoard = (props: any) => {
  const navigate = useNavigate();
  
  const today = new Date();
  const year = today.getFullYear();
  const week = today.getDay();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];
  const formatDate = `${year}/${month}/${day}(${dayOfTheWeek[week]})`;

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
        <Button text="月締め" />
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
