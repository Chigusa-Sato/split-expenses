type Props = {
  text: string;
  onClick?: () => void;
};
const Button = (props: Props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
