import type { ListRenderItem } from 'react-native'
import Meal from '../../models/meal'

export interface WithMealsListIncomingProps {
  items: Meal[]
}

export type RenderMealItem = ListRenderItem<Meal>

export interface WithMealsListOutgoingProps extends WithMealsListIncomingProps {
  renderMealItem: RenderMealItem
}
