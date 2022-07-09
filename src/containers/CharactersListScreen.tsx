import React from 'react'

import {FlatList, ListRenderItem, StyleSheet} from 'react-native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import {useGetCharactersQuery} from '../redux/api/endpoints/characters'
import {PaginationQuery} from '../models/HttpRequests'
import {Character} from '../models/Character'
import CharacterItem from '../components/CharacterItem'
import {ProfilesStackParams} from '../navigators/ProfilesNavigator'

const CharactersListScreen = ({
  navigation
}: NativeStackScreenProps<ProfilesStackParams, 'Characters'>) => {
  const [page, setPage] = React.useState<PaginationQuery>({page: 1})
  const [characters, setCharacters] = React.useState<Character[]>([])
  const {currentData} = useGetCharactersQuery(page)

  const loadMore = () => {
    setPage(prev => ({page: prev.page + 1}))
  }

  React.useEffect(() => {
    if (currentData && currentData.length)
      setCharacters(prev => [...prev, ...currentData])
  }, [currentData])

  return (
    <FlatList
      data={characters}
      renderItem={renderCharacterItem(navigation)}
      onEndReached={loadMore}
      contentContainerStyle={styles.contentContainer}
    />
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 16,
    marginVertical: 8
  }
})

export default CharactersListScreen

function renderCharacterItem(
  navigation: NativeStackNavigationProp<ProfilesStackParams, 'Characters'>
): ListRenderItem<Character> {
  return ({item, index}) => (
    <CharacterItem
      key={index}
      character={item}
      onPress={() => navigation.navigate('Details', item)}
    />
  )
}
