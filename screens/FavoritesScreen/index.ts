import withHOC from '../../utils/withHOC'
import useFavoritesState from '../../hooks/useFavoritesState'
import { MEALS } from '../../data/dummy-data'
import type { WithFavoritesScreenOutgoingProps } from './types'
import FavoritesScreen from './FavoritesScreen'

const withFavoritesScreen = withHOC<{}, WithFavoritesScreenOutgoingProps>(
  () => {
    const { favoritesState } = useFavoritesState()
    const favoriteMeals = MEALS.filter((meal) =>
      favoritesState.includes(meal.id),
    )

    return {
      favoriteMeals,
    }
  },
  'withFavoritesScreen',
)

export default withFavoritesScreen(FavoritesScreen)
