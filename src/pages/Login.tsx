import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';

const Login = () => {
  const navigate = useNavigate();
  const handleLink = (path: string) => navigate(path);
  const loginFunc = (): void => {
    console.log('LOGIN!!');
    //ログイン成功後、ホーム画面に遷移
    handleLink('/');
  };
  const signUpFunc = (): void => {
    console.log('SIGNUP!!');
    //新規登録成功後、ホーム画面に遷移
    handleLink('/');
  };

  return (
    <>
      <h1>ログイン/新規登録</h1>
      <Button text="LOGIN" onClick={() => loginFunc()} />
      <Button text="SIGNUP" onClick={() => signUpFunc()} />
      {/* <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div> */}
    </>
  );
};
export default Login;
