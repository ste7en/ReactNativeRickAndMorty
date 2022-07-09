import {Location} from '../../../../models/Location'
import HttpRoutes from '../../../../services/HttpRoutes'
import {HttpBaseQueryEndpointBuilder} from '../../baseQuery'

export const tagTypes = ['LOCATION']

export const getLocation = (build: HttpBaseQueryEndpointBuilder<'LOCATION'>) =>
  build.query<Location, string>({
    query: id => ({
      url: HttpRoutes.LocationById.replace(':id', id),
      method: 'GET',
      params: [3]
    }),
    providesTags: (result, error, id) => [{type: 'LOCATION', id}]
  })
