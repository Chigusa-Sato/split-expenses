type Props = {
  value: string | number;
  type: string;
  onChange: (event: any) => void;
};
const Input = (props: Props) => {
  return (
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
