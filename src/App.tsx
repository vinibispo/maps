import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VzdGF2b2RhY3J2aSIsImEiOiJja2VzaGgzcTAwMXE2MnVvM2RvYnN6OXl6In0.d7iDzCPH5H7dlokHQO4sGA'
)

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <View style={styles.page}>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 800,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
})

export default App
