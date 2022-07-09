import {Identifiable} from './Identifiable'

export type Location = Identifiable & {
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
