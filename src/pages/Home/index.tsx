import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {Map, Page, Container, Point} from './styles'
import {SafeAreaView, Image} from 'react-native'
import api from '../../services/api'
import Bus from "./../../assets/bus.png"


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
interface Veiculo {
  p: number
  a: boolean
  ta: string
  py: string
  px: string
}
interface Linha {
  c: string
  cl: number
  sl: number
  lt0: string
  lt1: number
  tp: string
  ts: string
  vs: Veiculo[]
}
interface Posicao {
  hr: string
  l: Linha[]
}
const Home: React.FC = () => {
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const [parada, setParada] = useState<Parada[]>([])
  const [linhas, setLinhas] = useState<any[]>([])
  const loadData = useCallback(async () => {
    try {
      const [
        responseAuth,
        responseParada,
        responsePosicao,
      ] = await Promise.all([
        api.post(
          '/Login/Autenticar?token=4648c776c939754bc50baab18bcd66093647cc68ceb017f40d65362582c8d8d5'
        ),
        api.get('/Parada/Buscar?termosBusca'),
        api.get('Posicao'),
      ])
      setIsApiLoaded(responseAuth.data)
      setParada(responseParada?.data?.filter((a, i) => i < 100))
      setLinhas(responsePosicao?.data?.l?.filter((a, i) => i < 10))
    } catch (err) {
      console.log(err.message)
    }
  }, [])
  useEffect(() => {
    loadData()
  }, [loadData])
  useEffect(() => {
    console.log(linhas[0] && linhas[0].vs)
  }, [linhas])
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
              {
                parada.map((par) => (
                  <PointAnnotation
                    key={par.cp}
                    id={par.ed}
                    coordinate={[par.px, par.py]}
                  />
                ))
              }
              { 
                linhas.map(({vs, ts, tp}) => vs.map(({py, px, ta, p}) =>
                  <PointAnnotation
                    id={py + '' + px + '' + tp + ts + 'a' + ta + p}
                    key={py + '' + px + '' + tp + ts + 'a' + ta + p}
                    coordinate={[px, py]}
                  >
                    <Image style={{width: 50, height: 50}} source={Bus} />
                  </PointAnnotation>
                ))
              }
            </Map>
          )}
        </Container>
      </Page>
    </SafeAreaView>
  )
}

export default Home
