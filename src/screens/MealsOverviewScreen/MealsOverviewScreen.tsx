import MealsList from '../../components/MealsList'
import type { WithMealsOverviewScreenOutgoingProps } from './types'

const MealsOverviewScreen: React.FC<WithMealsOverviewScreenOutgoingProps> = ({
  displayedMeals,
}) => <MealsList items={displayedMeals} />

export default MealsOverviewScreen
