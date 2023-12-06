import withHOC from '../../utils/withHOC'
import MealItem from '../MealItem'
import type {
  WithMealsListIncomingProps,
  RenderMealItem,
  WithMealsListOutgoingProps,
} from './types'
import MealsList from './MealsList'

const withMealsList = withHOC<WithMealsListIncomingProps, WithMealsListOutgoingProps>(
  ({ items }) => {
    const renderMealItem: RenderMealItem = (itemData) => {
      const item = itemData.item
  
      const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
      }
      return <MealItem {...mealItemProps} />
    }

    return {
      items,
      renderMealItem,
    }
  },
  'withMealsList',
)

export default withMealsList(MealsList)
