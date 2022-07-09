import {Identifiable} from './Identifiable'

export type Episode = Identifiable & {
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
