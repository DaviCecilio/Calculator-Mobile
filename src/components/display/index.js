/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default props => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  )
}
