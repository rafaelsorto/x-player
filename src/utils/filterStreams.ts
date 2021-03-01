import { compose, prop, toLower } from 'ramda'

export const filterStreams = ({ filter }: { filter: string }) =>
  compose(
    (name) => {
      return name.includes(toLower(filter ?? ''))
    },
    toLower,
    prop('name')
  )
