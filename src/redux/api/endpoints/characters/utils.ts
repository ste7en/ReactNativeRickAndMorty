import {Character} from '../../../../models/Character'
import {PaginatedQueryResult} from '../../../../models/HttpRequests'
import {episodeIdFromURL} from '../../../../utils/episodeIdFromURL'

export const getCharactersTransformResponse = (
  result: PaginatedQueryResult<Character>
): Character[] =>
  result.results.map(({episode, ...character}) => ({
    ...character,
    episode: episode
      .map(url => episodeIdFromURL(url))
      .filter(Boolean) as string[]
  }))
