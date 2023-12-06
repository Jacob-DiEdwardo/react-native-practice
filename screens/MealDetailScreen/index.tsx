import { useLayoutEffect, useContext } from 'react'
import withHOC from '../../utils/withHOC'
import { MEALS } from '../../data/dummy-data'
import { FavoritesContext } from '../../store/context/favorites-context'
import IconButton from '../../components/IconButton'
import type {
  WithMealDetailScreenIncomingProps,
  WithMealDetailScreenOutgoingProps,
} from './types'
import MealDetailScreen from './MealDetailScreen'

const withMealDetailScreen = withHOC<WithMealDetailScreenIncomingProps, WithMealDetailScreenOutgoingProps>(
  ({ route, navigation }) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const favoriteMealsCtx = useContext(FavoritesContext)
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
    const changeFavoriteStatusHandler = () => {
      if (mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId)
      } else {
        favoriteMealsCtx.addFavorite(mealId)
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              icon={mealIsFavorite ? 'star' : 'star-outline'}
              color="white"
              onPress={changeFavoriteStatusHandler}
            />
          )
        },
      })
    }, [navigation, changeFavoriteStatusHandler])

    return {
      selectedMeal,
      route,
      navigation,
    }
  },
  'withMealDetailScreen',
)

export default withMealDetailScreen(MealDetailScreen)
