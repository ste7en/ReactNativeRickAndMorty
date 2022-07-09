import {api} from '../..'
import {getCharacters, tagTypes} from './characters'

export const charactersApi = api
  .injectEndpoints({
    endpoints: build => ({
      getCharacters: getCharacters(build)
    }),
    overrideExisting: false
  })
  .enhanceEndpoints({
    addTagTypes: tagTypes
  })

export const {useGetCharactersQuery} = charactersApi
