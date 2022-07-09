import axios, {AxiosRequestConfig} from 'axios'
import Config from 'react-native-config'

const createHttpClient = ({
  baseURL = Config.BASE_URL,
  ...opts
}: AxiosRequestConfig) => axios.create({baseURL, ...opts})

export const httpClient = createHttpClient({})
