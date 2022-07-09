import {createApi} from '@reduxjs/toolkit/query/react'
import {httpBaseQuery} from './baseQuery'

export const api = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: httpBaseQuery(),
  endpoints: () => ({}),
  keepUnusedDataFor: 120
})
