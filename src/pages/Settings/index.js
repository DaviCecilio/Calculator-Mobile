import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './styles'
import { withTheme } from '../../assets/core/themeProvider'

function Settings({ theme, themes, setTheme }) {
  return (
    <FlatList
      style={[
        styles.container,
        { backgroundColor: theme.primaryBackgroundColor },
      ]}
      ListHeaderComponent={
        <Text style={[styles.headline, { color: theme.displayValue }]}>
          Choose your theme:
        </Text>
      }
      data={themes}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setTheme(item.key)}>
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor: item.primaryBackgroundColor,
              },
            ]}
          >
            <Text style={[styles.itemText, { color: item.textSettings }]}>
              {item.key}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default withTheme(Settings)
