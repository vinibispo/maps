import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from './pages/Home'

const {Navigator, Screen} = createStackNavigator()
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
