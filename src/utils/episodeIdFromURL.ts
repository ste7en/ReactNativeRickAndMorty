export const episodeIdFromURL = (url: string): string | undefined => {
  const matches = url.match(/\/episode\/(\d+)/)
  if (matches && matches.length === 2) {
    return matches[1]
  }
}
