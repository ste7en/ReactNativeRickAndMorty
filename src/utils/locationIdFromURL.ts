export const locationIdFromURL = (url: string): string | undefined => {
  const matches = url.match(/\/location\/(\d+)/)
  if (matches && matches.length === 2) {
    return matches[1]
  }
}
