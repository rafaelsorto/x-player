import { compose, evolve, pick, toLower } from 'ramda'

export const filterStreams = ({
  filter,
  categoryId,
}: {
  filter: string
  categoryId: string
}) =>
  compose(
    ({ name, category_id }) => {
      return category_id === categoryId && name.includes(toLower(filter ?? ''))
    },
    evolve({ name: toLower }),
    pick(['name', 'category_id'])
  )
