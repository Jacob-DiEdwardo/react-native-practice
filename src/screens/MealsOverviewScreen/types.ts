import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackNavigatorParamList } from '../../types'
import Meal from '../../models/meal'

export type WithMealsOverviewScreenIncomingProps =
  NativeStackScreenProps<RootStackNavigatorParamList, 'MealsOverview'>

export interface WithMealsOverviewScreenOutgoingProps extends WithMealsOverviewScreenIncomingProps {
  displayedMeals: Meal[]
}
