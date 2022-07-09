import React from 'react'
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native'
import FastImage from 'react-native-fast-image'

import {Character} from '../models/Character'

interface CharacterItemProps {
  character: Character
  onPress?: () => void
}

interface CharacterDetailProps {
  label: string
  value: string
}

const CharacterDetails = ({label, value}: CharacterDetailProps) => (
  <>
    {value && (
      <Text style={styles.detailLabel}>
        {`${label}: `}
        <Text style={styles.detailText}>{value}</Text>
      </Text>
    )}
  </>
)

const CharacterItem = ({character, onPress}: CharacterItemProps) => {
  return (
    <>
      <Pressable style={pressableStyle} onPress={onPress}>
        <FastImage source={{uri: character.image}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{character.name}</Text>
          <CharacterDetails value={character.species} label="Species" />
          <CharacterDetails value={character.type} label="Type" />
          <CharacterDetails value={character.status} label="Status" />
          <CharacterDetails value={character.gender} label="Gender" />
        </View>
      </Pressable>
    </>
  )
}

export default CharacterItem

const pressableStyle: (
  state: PressableStateCallbackType
) => StyleProp<ViewStyle> = state => ({
  borderRadius: 16,
  padding: 8,
  flexDirection: 'row',
  backgroundColor: 'white',
  marginVertical: 8,
  elevation: 5,
  shadowColor: 'skyblue',
  shadowRadius: 10,
  shadowOpacity: state.pressed ? 0 : 0.2,
  opacity: state.pressed ? 0.5 : 1
})

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 3.1416 * 100
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailLabel: {
    fontSize: 12,
    color: '#777',
    fontStyle: 'normal'
  },
  detailText: {
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic'
  }
})
