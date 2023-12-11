import { View, Text } from 'react-native'
import MealsList from '../../components/MealsList'
import type { WithFavoritesScreenOutgoingProps } from './types'

const FavoritesScreen: React.FC<WithFavoritesScreenOutgoingProps> = ({
  favoriteMeals,
}) => (
  <>
    {favoriteMeals.length === 0 ? (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold text-white">
          You have no favorite meals yet.
        </Text>
      </View>
    ) : (
      <MealsList items={favoriteMeals} />
    )}
  </>
)

export default FavoritesScreen
