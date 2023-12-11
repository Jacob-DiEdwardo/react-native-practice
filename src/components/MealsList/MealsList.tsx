import { View, FlatList } from 'react-native'
import type { WithMealsListOutgoingProps } from './types'

const MealsList: React.FC<WithMealsListOutgoingProps> = ({
  items,
  renderMealItem,
}) => (
  <View className="flex-1 p-4">
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  </View>
)

export default MealsList
