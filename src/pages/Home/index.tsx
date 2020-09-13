import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {Map, Page, Container} from './styles'
import {SafeAreaView} from 'react-native'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VzdGF2b2RhY3J2aSIsImEiOiJja2VzaGgzcTAwMXE2MnVvM2RvYnN6OXl6In0.d7iDzCPH5H7dlokHQO4sGA'
)

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Page>
        <Container>
          <Map />
        </Container>
      </Page>
    </SafeAreaView>
  )
}

export default Home
