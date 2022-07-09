import {Episode} from '../../../../models/Episode'
import HttpRoutes from '../../../../services/HttpRoutes'
import {HttpBaseQueryEndpointBuilder} from '../../baseQuery'

export const tagTypes = ['EPISODE', 'EPISODES']

export const getEpisodes = (
  build: HttpBaseQueryEndpointBuilder<typeof tagTypes[0]>
) =>
  build.query<Episode[], string[]>({
    query: ids => ({
      url: HttpRoutes.Episode + '/' + ids.toString(),
      method: 'GET'
    }),
    transformResponse: (result: Episode | Episode[]) =>
      Array.isArray(result) ? result : [result],
    providesTags: (result = [], error, ids) => [
      {type: tagTypes[1], id: ids.toString()},
      ...result.map(episode => ({type: tagTypes[0], id: episode.id}))
    ]
  })
