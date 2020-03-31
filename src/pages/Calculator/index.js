/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View } from 'react-native'
import Button from '../../components/Buttons'
import Display from '../../components/Display'

import { withTheme } from '../../assets/core/themeProvider'
import styles from './styles'

function Calculator({ theme }) {
  const [displayValue, setDisplayValue] = useState('0'),
    [clearDisplay, setClearDisplay] = useState(false),
    [operation, setOperation] = useState(null),
    [values, setValues] = useState([0, 0]),
    [current, setCurrent] = useState(0)

  function addDigit(n) {
    const displayClear = displayValue === '0' || clearDisplay

    if (n === '.' && !displayClear && displayValue.includes('.')) {
      return
    }

    const currentValue = displayClear ? '' : displayValue,
      newDisplayValue = currentValue + n

    setDisplayValue(newDisplayValue)
    setClearDisplay(false)

    if (n !== '.') {
      const newValue = parseFloat(newDisplayValue),
        v = [...values]

      v[current] = newValue
      setValues(v)
    }
  }

  function clearMemory() {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  function addOperation(op) {
    if (current === 0) {
      setOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = op === '=',
        v = [...values]
      try {
        // eslint-disable-next-line no-eval
        v[0] = eval(`${values[0]} ${operation} ${values[1]} `)
      } catch (e) {
        // eslint-disable-next-line prefer-destructuring
        v[0] = values[0]
      }

      v[1] = 0
      setDisplayValue(`${v[0]}`)
      setOperation(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(true)
      setValues(v)
    }
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.primaryBackgroundColor },
      ]}
    >
      <Display value={displayValue} />
      <View style={styles.containerButtons}>
        <Button label="AC" typeOf="triple" onClick={clearMemory} />
        <Button label="/" operation onClick={addOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={addOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={addOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={addOperation} />
        <Button label="0" typeOf="double" onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation typeOf="equals" onClick={addOperation} />
      </View>
    </View>
  )
}

export default withTheme(Calculator)
