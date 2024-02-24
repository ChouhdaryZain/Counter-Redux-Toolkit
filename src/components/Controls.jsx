import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Controls.module.css'
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';


const Controls = () => {

  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  }

  const handleAddNumber = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  }
  const handleSubtractNumber = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  }

  return (
    <>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button" className="btn btn-success btn-lg px-4 gap-3">+1</button>
        <button
          onClick={handleDecrement}
          type="button" className="btn btn-danger btn-lg px-4">-1</button>
        <button
          onClick={handlePrivacy}
          type="button" className="btn btn-warning btn-lg px-4">Privacy Toggle</button>
      </div>

      <div className={`d-grid gap-2 d-sm-flex justify-content-sm-center ${styles["AddSubtractNum"]}`}>
        <input
          ref={inputElement}
          placeholder='Add number to add or subtract'
          className={`${styles["input"]}`}
        />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleAddNumber}
          type="button" className="btn btn-success btn-lg px-4 gap-3">Add</button>
        <button
          onClick={handleSubtractNumber}
          type="button" className="btn btn-danger btn-lg px-4">Subtract</button>
      </div>
    </>
  )
}

export default Controls