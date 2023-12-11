import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackNavigatorParamList } from '../../types'
import Meal from '../../models/meal'

export type WithMealDetailScreenIncomingProps =
  NativeStackScreenProps<RootStackNavigatorParamList, 'MealDetail'>

export interface WithMealDetailScreenOutgoingProps extends WithMealDetailScreenIncomingProps {
  selectedMeal: Meal
}
