import {api} from '../..'
import {getLocation, tagTypes} from './locations'

export const locationsApi = api
  .injectEndpoints({
    endpoints: build => ({
      getLocation: getLocation(build)
    }),
    overrideExisting: false
  })
  .enhanceEndpoints({
    addTagTypes: tagTypes
  })

export const {useLazyGetLocationQuery} = locationsApi
