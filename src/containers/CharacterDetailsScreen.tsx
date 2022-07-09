import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {ProfilesStackParams} from '../navigators/ProfilesNavigator'
import {useLazyGetLocationQuery} from '../redux/api/endpoints/locations'
import {locationIdFromURL} from '../utils/locationIdFromURL'
import {
  MainCharacterInfo,
  LocationInfo,
  EpisodesInfo
} from '../components/CharacterInfo'

const CharacterDetailsScreen = ({
  route: {params: character}
}: NativeStackScreenProps<ProfilesStackParams, 'Details'>) => {
  const [getLocation, {currentData: location}] = useLazyGetLocationQuery()
  const [getOrigin, {currentData: origin}] = useLazyGetLocationQuery()
  React.useEffect(() => {
    const locationId = locationIdFromURL(character.location.url)
    if (locationId) getLocation(locationId, true)
  }, [character.location, getLocation])

  React.useEffect(() => {
    const originId = locationIdFromURL(character.origin.url)
    if (originId) getOrigin(originId, true)
  }, [character.origin, getOrigin])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <FastImage source={{uri: character.image}} style={styles.image} />
      <MainCharacterInfo character={character} />
      <LocationInfo title="Origin" location={origin} />
      <LocationInfo title="Location" location={location} />
      <EpisodesInfo episodes={character.episode} />
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  contentContainer: {
    paddingBottom: 32
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8
  }
})

export default CharacterDetailsScreen
