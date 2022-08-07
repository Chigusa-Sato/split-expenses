import React from 'react';
import ComfirmTotalPrice from '../ComfirmTotalPrice';
type Props = {
  modalTitle: string;
  modalName: string;
  showldShow: boolean;
  hideModal?: () => void;
  totalPrice?: number;
  initialTotalPrice?: number;
};

const Modal = (props: Props) => {
  return (
    <>
      {props.showldShow ? (
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            width: '100vw',
            height: '100vh',
            zIndex: '1',
            position: 'fixed',
            top: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              width: '65vw',
              height: '55vh',
              zIndex: '2',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                background: '#29304b',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  display: 'inline-block',
                  color: 'white',
                }}
              >
                {props.modalTitle}
              </p>
              <span
                style={{ display: 'inline-block' }}
                onClick={props.hideModal}
              >
                ✖
              </span>
            </div>
            {/* 表示内容を出し分ける */}
            {props.modalName === 'modal_confirmTotalPrice' ? (
              <ComfirmTotalPrice
                totalPrice={props.totalPrice}
                initialTotalPrice={props.initialTotalPrice}
              ></ComfirmTotalPrice>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
