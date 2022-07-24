import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <Button text="サンプル" />
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;
