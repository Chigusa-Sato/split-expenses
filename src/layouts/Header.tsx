import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#DBE7FF',
          width: '100%',
          height: '80px',
          position: 'fixed',
          top: '0px',
          left: '0px',
        }}
      >
        <ul style={{ listStyle: 'none', display: 'flex', gap: '5px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>Logout</li>
          <li>Calc</li>
          <li>History</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
