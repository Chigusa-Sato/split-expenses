type Props = {
  text: string;
};
const a: string = 'リンゴ';
const Button = (props: Props) => {
  return <button>{a}</button>;
};

export default Button;
