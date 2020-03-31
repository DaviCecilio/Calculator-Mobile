import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { withTheme } from './assets/core/themeProvider'

import Settings from './pages/Settings'
import Calculator from './pages/Calculator'

const Tab = createBottomTabNavigator()

function Routes({ theme }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Calculator"
        tabBarOptions={{
          activeTintColor: `${theme.iconActive}`,
          inactiveTintColor: `${theme.iconInactive}`,
          style: {
            backgroundColor: `${theme.primaryBackgroundColor}`,
            padding: 1,
          },
          labelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: 'Calculator',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="calculator" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default withTheme(Routes)
