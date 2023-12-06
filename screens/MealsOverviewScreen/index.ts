import { useLayoutEffect } from 'react'
import withHOC from '../../utils/withHOC'
import { MEALS, CATEGORIES } from '../../data/dummy-data'
import type {
  WithMealsOverviewScreenIncomingProps,
  WithMealsOverviewScreenOutgoingProps,
} from './types'
import MealOverviewScreen from './MealsOverviewScreen'

const withMealsOverviewScreen = withHOC<WithMealsOverviewScreenIncomingProps, WithMealsOverviewScreenOutgoingProps>(
  ({ route, navigation}) => {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0
    })
  
    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(
        (category) => category.id === catId
      ).title
  
      navigation.setOptions({
        title: categoryTitle,
      })
    }, [catId, navigation])

    return {
      displayedMeals,
      route,
      navigation,
    }
  },
  'withMealOverviewScreen',
)

export default withMealsOverviewScreen(MealOverviewScreen)
