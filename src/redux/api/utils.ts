import FastImage from 'react-native-fast-image'
import {store} from '..'
import {Character} from '../../models/Character'
import {prefetchEpisode} from './endpoints/episodes'

export const prefetchEpisodesForCharacters = (characters: Character[]) =>
  characters
    .map(c => c.episode)
    .forEach(episodes =>
      store.dispatch(prefetchEpisode('getEpisodes', episodes, {}))
    )

export const prefetchCharactersImage = (characters: Character[]) =>
  FastImage.preload(characters.map(character => ({uri: character.image})))

export const doPrefetch = (characters: Character[]) => {
  prefetchCharactersImage(characters)
  prefetchEpisodesForCharacters(characters)
}
