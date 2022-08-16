import { connect } from 'react-redux';
import { countPlus, countMinus } from '../actions';

const Counter = (props) => {
  return (
    <>
      <p>現在の数字は{props.val}です</p>
      <button onClick={props.countMinus}>-1</button>
      <button onClick={props.countPlus}>+1</button>
    </>
  );
};
//TODO:reduxに定義したstateはsetStateしなくてもリアクティブになる仕組みなのか？検証する
const mapStateToProps = (state) => ({
  val: state.counter.val,
});

const mapDispatchToProps = (dispatch) => ({
  countPlus: () => dispatch(countPlus()),
  countMinus: () => dispatch(countMinus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
