import {Character} from '../../../../models/Character'
import {
  PaginatedQueryResult,
  PaginationQuery
} from '../../../../models/HttpRequests'
import HttpRoutes from '../../../../services/HttpRoutes'
import {HttpBaseQueryEndpointBuilder} from '../../baseQuery'

const getCharactersTransformResponse = (
  result: PaginatedQueryResult<Character>
): Character[] => result.results

export const tagTypes = ['CHARACTERS_PAGE', 'CHARACTERS']

export const getCharacters = (
  build: HttpBaseQueryEndpointBuilder<'CHARACTERS_PAGE'>
) =>
  build.query<Character[], PaginationQuery>({
    query: params => ({url: HttpRoutes.Character, method: 'GET', params}),
    transformResponse: getCharactersTransformResponse,
    providesTags: (result = [], error, {page}) => [
      {type: 'CHARACTERS_PAGE', id: 'LIST', page},
      ...result.map(character => ({
        type: 'CHARACTERS_PAGE' as 'CHARACTERS_PAGE',
        id: character.id
      }))
    ]
  })

export const getCharacter = (
  build: HttpBaseQueryEndpointBuilder<'CHARACTERS'>
) =>
  build.query<Character, string>({
    query: id => ({
      url: HttpRoutes.CharacterById.replace(':id', id),
      method: 'GET'
    }),
    providesTags: (result, error, id) => [{type: 'CHARACTERS', id}]
  })
