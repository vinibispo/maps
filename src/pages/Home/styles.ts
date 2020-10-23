import styled from 'styled-components/native'
import MapboxGL from '@react-native-mapbox-gl/maps'
const {MapView} = MapboxGL
export const Map = styled(MapView)`
  flex: 1;
`
export const Page = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f00;
`
export const Container = styled.View`
  height: 800px;
  width: 400px;
  background-color: tomato;
`
export const Point = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`
