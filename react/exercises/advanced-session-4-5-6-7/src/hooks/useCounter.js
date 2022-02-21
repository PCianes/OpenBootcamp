import { useState } from 'react'

export const useCounter = (defaultNumber = 0, defaultStep = 1, maxNumber, minNumber) => {
  const [counter, setValue] = useState(defaultNumber)
  const [step, setStep] = useState(defaultStep)

  const initialValue = defaultNumber
  const maxValue = maxNumber === undefined ? null : parseInt(maxNumber)
  const minValue = minNumber === undefined ? null : parseInt(minNumber)

  const increment = () => {
    const nextValue = counter + step
    if (maxValue === null) {
      setValue(nextValue)
    } else {
      setValue(nextValue >= maxValue ? maxValue : nextValue)
    }
  }

  const decrement = () => {
    const nextValue = counter - step
    if (minValue === null) {
      setValue(nextValue)
    } else {
      setValue(nextValue <= minValue ? minValue : nextValue)
    }
  }

  const reset = () => {
    setValue(initialValue)
  }

  const newStep = (newStep) => {
    setStep(Math.abs(parseInt(newStep)))
  }

  return {
    counter,
    setCounter: { increment, decrement, reset, newStep }
  }
} 