import { View, Text } from 'react-native'
import type { MealDetailsProps } from './types'

const MealDetails: React.FC<MealDetailsProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => (
  <View className={`flex-row items-center justify-center p-2 ${style}`}>
    <Text className={`mx-1 text-xs ${textStyle}`}>{duration}m</Text>
    <Text className={`mx-1 text-xs ${textStyle}`}>
      {complexity.toUpperCase()}
    </Text>
    <Text className={`mx-1 text-xs ${textStyle}`}>
      {affordability.toUpperCase()}
    </Text>
  </View>
)

export default MealDetails
