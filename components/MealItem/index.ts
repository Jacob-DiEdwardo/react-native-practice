import { useNavigation } from '@react-navigation/native'
import withHOC from '../../utils/withHOC'
import type {
  WithMealItemIncomingProps,
  WithMealItemOutgoingProps,
} from './types'
import MealItem from './MealItem'

const withMealItem = withHOC<WithMealItemIncomingProps, WithMealItemOutgoingProps>(
  ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
  }) => {
    const navigation = useNavigation()

    const selectMealItemHandler = () => {
      navigation.navigate('MealDetail', {
        mealId: id,
      })
    }

    return {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      selectMealItemHandler,
    }
  },
  'withMealItem',
)

export default withMealItem(MealItem)
