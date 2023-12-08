import { StyleSheet, View, Text } from 'react-native'
import MealsList from '../../components/MealsList'
import type { WithFavoritesScreenOutgoingProps } from './types'

const FavoritesScreen: React.FC<WithFavoritesScreenOutgoingProps> = ({
  favoriteMeals,
}) => (
  <>
    {favoriteMeals.length === 0 ? (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    ) : (
      <MealsList items={favoriteMeals} />
    )}
  </>
)

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})
