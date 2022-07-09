import {api} from '../..'
import {getEpisodes, tagTypes} from './episodes'

export const episodesApi = api
  .injectEndpoints({
    endpoints: build => ({
      getEpisodes: getEpisodes(build)
    }),
    overrideExisting: false
  })
  .enhanceEndpoints({
    addTagTypes: tagTypes
  })

export const {
  useGetEpisodesQuery,
  useLazyGetEpisodesQuery,
  util: {prefetch: prefetchEpisode}
} = episodesApi
