import { increment, decrement, CounterContext } from "@/context/Counter";
import { ChangeEventHandler, useContext, useState } from "react";

const TestComponent = () => {
    const [value, setValue] = useState<number>(0);
    const { state, dispatch } = useContext(CounterContext);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setValue(+e.target.value);
    const handleIncrementClick = () => {
        dispatch(increment(value));
    };
    const handleDecrementClick = () => {
        dispatch(decrement(value));
    };
    return (
        <div>
            <p>{state.count}</p>
            <input type='number' onChange={handleChange} />
            <button onClick={handleIncrementClick}>+</button>
            <button onClick={handleDecrementClick}>-</button>
        </div>
    );
};

export default TestComponent;
