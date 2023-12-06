import { View, FlatList, StyleSheet } from 'react-native'
import type { WithMealsListOutgoingProps } from './types'

const MealsList: React.FC<WithMealsListOutgoingProps> = ({
  items,
  renderMealItem,
}) => (
  <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  </View>
)

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
