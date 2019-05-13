import Counter from '../components/Counter.js';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

//store안의 state를 props로 연결해는 함수
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
})

//액션함수를 연결시키는 함수
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
})


const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;



