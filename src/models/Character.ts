import {Gender} from './Gender'
import {Identifiable} from './Identifiable'
import {Location} from './Location'

export type Character = Identifiable & {
  name: string
  status: string
  species: string
  type: string
  gender: Gender
  origin: Pick<Location, 'name' | 'url'>
  location: Pick<Location, 'name' | 'url'>
  image: string
  episode: string[]
  url: string
  created: string
}
