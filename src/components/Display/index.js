/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { View, Text } from 'react-native'

import { withTheme } from '../../assets/core/themeProvider'
import styles from './styles'

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text
        style={[styles.displayValue, { color: props.theme.displayValue }]}
        numberOfLines={1}
      >
        {props.value}
      </Text>
    </View>
  )
}

export default withTheme(Display)
