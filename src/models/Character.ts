import {Gender} from './Gender'
import {Identifiable} from './Identifiable'
import {Location} from './Location'

export type Character = Identifiable & {
  name: string
  status: string
  species: string
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}
