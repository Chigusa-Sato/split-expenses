type Props = {
  value: string;
  onInput: (event: any) => void;
};
const Input = (props: Props) => {
  return <input value={props.value} onChange={props.onInput}></input>;
};

export default Input;
