import { Button, InputNumber } from "antd";
import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount, increment } from "../../redux/features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [inputAmount, setInputAmount] = useState(0)
  const count = useSelector((state) => state.counter.count) // Lấy data từ store
  const disPatch = useDispatch();

  const handleIncrement = () => {
    disPatch(increment())
  }

  const handleOnChangeAmount = (amount) => {
    setInputAmount(amount)
  }

  const handleDecrementByAmount = () => {
    disPatch(decrementByAmount(inputAmount))
  }

  return <div>
    <InputNumber
      onChange={handleOnChangeAmount}
      defaultValue={0}
      min={0}
      value={inputAmount}
    />
    <Button type="primary" onClick={handleDecrementByAmount}>Decrement Amount</Button>
    <Button>Decrement</Button>
    <span>{count}</span>
    <Button onClick={handleIncrement}>Increment</Button>
    <Button type="primary">Increment Amount</Button>
  </div>
}

export default Counter
