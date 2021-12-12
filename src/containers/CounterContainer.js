import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch} from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer(){
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    
    /*
    // 최적화 방법 1
    const number = useSelector(state => state.counter.number)
    const diff = useSelector(state => state.counter.diff)
    */

      /*
    // 최적화 방법 2
    const number = useSelector(state => state.counter.number)
    const diff = useSelector(state => state.counter.diff)
    */


    const dispatch = useDispatch();
    
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff))
    

    return(
        <div>
            <Counter 
                number = {number}
                diff = {diff}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onSetDiff={onSetDiff}
            />
        </div>
    );
}

export default CounterContainer;