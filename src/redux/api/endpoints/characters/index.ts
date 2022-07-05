import {api} from '../..'
import {getCharacter, getCharacters, tagTypes} from './characters'

export const charactersApi = api
  .injectEndpoints({
    endpoints: build => ({
      getCharacters: getCharacters(build),
      getCharacter: getCharacter(build)
    }),
    overrideExisting: false
  })
  .enhanceEndpoints({
    addTagTypes: tagTypes
  })

export const {
  useGetCharacterQuery,
  useGetCharactersQuery,
  useLazyGetCharacterQuery,
  useLazyGetCharactersQuery,
  usePrefetch,
  endpoints: {
    getCharacters: {useQuerySubscription: useGetCharactersQuerySubscription}
  }
} = charactersApi
