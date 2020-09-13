import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {SafeAreaView, StatusBar} from 'react-native'
import Routes from './routes'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VzdGF2b2RhY3J2aSIsImEiOiJja2VzaGgzcTAwMXE2MnVvM2RvYnN6OXl6In0.d7iDzCPH5H7dlokHQO4sGA'
)

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Routes />
    </>
  )
}

export default App
