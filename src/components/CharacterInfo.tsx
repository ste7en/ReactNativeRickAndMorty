import React from 'react'
import {Text, View} from 'react-native'
import {Character} from '../models/Character'
import {Location} from '../models/Location'
import {useLazyGetEpisodesQuery} from '../redux/api/endpoints/episodes'
import {styles} from '../containers/CharacterDetailsScreen'

export const MainCharacterInfo = ({character}: {character: Character}) => (
  <>
    <Text style={styles.title}>{character.name}</Text>
    <Text style={styles.detailLabel}>{'Species'}</Text>
    <Text style={styles.detailText}>{character.species}</Text>
    {character.type && (
      <>
        <Text style={styles.detailLabel}>{'Type'}</Text>
        <Text style={styles.detailText}>{character.type}</Text>
      </>
    )}
    <Text style={styles.detailLabel}>{'Status'}</Text>
    <Text style={styles.detailText}>{character.status}</Text>
    <Text style={styles.detailLabel}>{'Gender'}</Text>
    <Text style={styles.detailText}>{character.gender}</Text>
  </>
)

export const LocationInfo = ({
  title,
  location
}: {
  title: string
  location?: Location
}) =>
  location ? (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detailLabel}>{'Name'}</Text>
      <Text style={styles.detailText}>{location.name}</Text>
      <Text style={styles.detailLabel}>{'Type'}</Text>
      <Text style={styles.detailText}>{location.type}</Text>
      <Text style={styles.detailLabel}>{'Dimension'}</Text>
      <Text style={styles.detailText}>{location.dimension}</Text>
      <Text style={styles.detailLabel}>{'Residents'}</Text>
      <Text style={styles.detailText}>{location.id}</Text>
    </View>
  ) : (
    <></>
  )

export const EpisodesInfo = ({episodes}: {episodes: Character['episode']}) => {
  const [fetchEpisodes, {currentData}] = useLazyGetEpisodesQuery()

  React.useEffect(() => {
    fetchEpisodes(episodes, true)
  }, [episodes, fetchEpisodes])

  return currentData ? (
    <>
      <Text style={styles.title}>{'Episodes'}</Text>
      {currentData?.map(episode => (
        <Text key={episode.id} style={styles.detailText}>
          {`• ${episode.name} (${episode.air_date})`}
        </Text>
      ))}
    </>
  ) : (
    <></>
  )
}
