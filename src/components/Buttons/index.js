/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { withTheme } from '../../assets/core/themeProvider'

import styles from './styles'

const Button = (props) => {
  const stylesButtons = [styles.button, { color: props.theme.buttonPrimary }]
  if (props.operation)
    stylesButtons.push(styles.operationButton, {
      color: props.theme.buttonOperation,
    })
  switch (props.typeOf) {
    case 'double':
      stylesButtons.push(styles.buttonDouble)
      break
    case 'triple':
      stylesButtons.push(styles.buttonTriple, {
        color: props.theme.buttonDanger,
      })
      break
    case 'equals':
      stylesButtons.push(styles.buttonEquals, {
        color: props.theme.buttonEquals,
      })
      break
    default:
      break
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={`${props.theme.primaryBackgroundColor}`}
      onPress={() => props.onClick(props.label)}
    >
      <Text style={stylesButtons}>{props.label}</Text>
    </TouchableHighlight>
  )
}

export default withTheme(Button)
