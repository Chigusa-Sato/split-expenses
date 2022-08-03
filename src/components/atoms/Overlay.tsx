import React from 'react';

type Props = {
  shouldShow: boolean;
};

const Overlay = (props: Props) => {
  return (
    <>
      {props.shouldShow ? (
        <div
          style={{
            background: 'black',
            opacity: '70%',
            width: '100vw',
            height: '100vh',
            zIndex: '1',
            position: 'fixed',
            top: '0px',
          }}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Overlay;
