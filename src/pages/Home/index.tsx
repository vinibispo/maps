import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {Map, Page, Container} from './styles'
import {SafeAreaView} from 'react-native'
import api from '../../services/api'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VzdGF2b2RhY3J2aSIsImEiOiJja2VzaGgzcTAwMXE2MnVvM2RvYnN6OXl6In0.d7iDzCPH5H7dlokHQO4sGA'
)
const {Camera, PointAnnotation} = MapboxGL
interface Parada {
  cp: number
  np: string
  py: number
  px: number
  ed: string
}
const Home: React.FC = () => {
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const [parada, setParada] = useState<Parada[]>([])
  const loadData = useCallback(async () => {
    const [
      responseAuth,
      responseParada,
    ] = await Promise.all([
      api.post(
        '/Login/Autenticar?token=4648c776c939754bc50baab18bcd66093647cc68ceb017f40d65362582c8d8d5'
      ),
      api.get('/Parada/Buscar?termosBusca'),
    ])
    setIsApiLoaded(responseAuth.data)
    setParada(responseParada.data)
    console.log(JSON.stringify(parada[0]))
  }, [])
  useEffect(() => {
    loadData()
  }, [loadData])
  return (
    <SafeAreaView style={{flex: 1}}>
      <Page>
        <Container>
          {isApiLoaded && !!parada.length && (
            <Map styleURL={MapboxGL.StyleURL.Dark}>
              <Camera
                centerCoordinate={[
                  -46.6576336,
                  -23.5874162,
                ]}
                zoomLevel={12}
              />
              {!!parada.length &&
                parada.map((par) => (
                  <PointAnnotation
                    key={par.cp}
                    id={par.ed}
                    coordinate={[par.px, par.py]}
                  />
                ))}
            </Map>
          )}
        </Container>
      </Page>
    </SafeAreaView>
  )
}

export default Home
