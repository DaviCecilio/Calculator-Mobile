import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './styles'
import { withTheme } from '../../assets/core/themeProvider'

function Settings({ theme, themes, setTheme }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: theme.primaryBackgroundColor }}
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
      </View>

      <View
        style={[
          styles.containerInfo,
          { backgroundColor: theme.primaryBackgroundColor },
        ]}
      >
        <View style={styles.contactButtons}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/DaviCecilio')}
          >
            <FontAwesome name="github" size={30} color={theme.buttonPrimary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/davicecilio/')
            }
          >
            <FontAwesome
              name="linkedin"
              size={30}
              color={theme.buttonPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'mailto:davim.cecilio@gmail.com?subject=Curti o projeto da calculadora'
              )
            }
          >
            <FontAwesome name="at" size={30} color={theme.buttonPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerAuthor}>
          <Text style={[styles.textAuthor, { color: theme.displayValue }]}>
            Author: Davi M. Cecílio
          </Text>
        </View>
      </View>
    </View>
  )
}

export default withTheme(Settings)
