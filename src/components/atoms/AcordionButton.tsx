type Props = {
  isOpen: boolean;
  onClick?: () => void;
};
// const a = true;
const AcordionButton = (props: Props) => {
  return props.isOpen ? (
    <span onClick={props.onClick}>▼</span>
  ) : (
    <span onClick={props.onClick}>▶</span>
  );
};

export default AcordionButton;
