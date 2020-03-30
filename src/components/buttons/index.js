/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

import styles from './styles'

export default props => {
  const stylesButtons = [styles.button]
  if (props.operation) stylesButtons.push(styles.operationButton)
  switch (props.widthButton) {
    case 'double':
      stylesButtons.push(styles.buttonDouble)
      break
    case 'triple':
      stylesButtons.push(styles.buttonTriple)
      break
    default:
      break
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButtons}>{props.label}</Text>
    </TouchableHighlight>
  )
}
