import { useContext } from 'react'
import withHOC from '../../utils/withHOC'
import { FavoritesContext } from '../../store/context/favorites-context'
import { MEALS } from '../../data/dummy-data'
import type { WithFavoritesScreenOutgoingProps } from './types'
import FavoritesScreen from './FavoritesScreen'

const withFavoritesScreen = withHOC<{}, WithFavoritesScreenOutgoingProps>(
  () => {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

    return {
      favoriteMeals,
    }
  },
  'withFavoritesScreen',
)

export default withFavoritesScreen(FavoritesScreen)
