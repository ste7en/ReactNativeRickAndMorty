export interface PaginationQuery {
  page: number
}

export type PaginatedQueryResult<T> = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: T[]
}
