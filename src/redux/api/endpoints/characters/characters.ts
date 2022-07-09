import {Character} from '../../../../models/Character'
import {PaginationQuery} from '../../../../models/HttpRequests'
import HttpRoutes from '../../../../services/HttpRoutes'
import {HttpBaseQueryEndpointBuilder} from '../../baseQuery'
import {doPrefetch} from '../../utils'
import {getCharactersTransformResponse} from './utils'

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
    ],
    async onQueryStarted(args, {queryFulfilled}) {
      const {data} = await queryFulfilled
      doPrefetch(data)
    }
  })
