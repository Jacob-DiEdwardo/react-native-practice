import { View, Text, Image, ScrollView } from 'react-native'
import List from '../../components/List'
import Subtitle from '../../components/Subtitle'
import MealDetails from '../../components/MealDetails'
import type { WithMealDetailScreenOutgoingProps } from './types'

const MealDetailScreen: React.FC<WithMealDetailScreenOutgoingProps> = ({
  selectedMeal,
}) => (
  <ScrollView className="mb-32">
    <Image
      className="w-full h-[350px]"
      source={{ uri: selectedMeal.imageUrl }}
    />
    <Text className="font-bold text-2xl m-2 text-center text-white">
      {selectedMeal.title}
    </Text>
    <MealDetails
      duration={selectedMeal.duration}
      complexity={selectedMeal.complexity}
      affordability={selectedMeal.affordability}
      textStyle="text-white"
    />
    <View className="items-center">
      <View className="w-4/5">
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </View>
  </ScrollView>
)

export default MealDetailScreen
