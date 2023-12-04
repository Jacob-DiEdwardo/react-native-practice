import { useLayoutEffect } from 'react'
import MealsList from '../../components/MealsList/MealsList'
import { MEALS, CATEGORIES } from '../../data/dummy-data'
import type { MealsOverviewScreenProps } from './types'

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation
}) => {
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

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen
