import { compose, includes, prop, toLower } from 'ramda'

export const filterCategories = (filter: string) =>
  compose(includes(toLower(filter)), toLower, prop('category_name'))
