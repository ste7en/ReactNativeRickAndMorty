import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import type {BaseQueryFn} from '@reduxjs/toolkit/query'
import type {AxiosRequestConfig, AxiosError} from 'axios'
import Config from 'react-native-config'
import {httpClient} from '../../services/httpClient'

interface HttpBaseQueryError {
  status?: number
  data?: unknown
}

export const httpBaseQuery =
  <T>(
    {baseUrl}: {baseUrl: string} = {baseUrl: Config.BASE_URL}
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    T,
    HttpBaseQueryError
  > =>
  async ({url, method, data, params}) => {
    try {
      const result = await httpClient({
        url: baseUrl + url,
        method,
        data,
        params
      })
      return {data: result.data}
    } catch (httpError) {
      let err = httpError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }

export type HttpBaseQueryEndpointBuilder<TagTypes extends string> =
  EndpointBuilder<ReturnType<typeof httpBaseQuery>, TagTypes, string>
