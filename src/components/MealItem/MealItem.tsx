import { View, Pressable, Text, Image, Platform } from 'react-native'
import type { WithMealItemOutgoingProps } from './types'
import MealDetails from '../MealDetails'

const MealItem: React.FC<WithMealItemOutgoingProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  selectMealItemHandler,
}) => (
  <View
    className={`
      m-4
      rounded-lg
      overflow-${Platform.OS === 'android' ? 'hidden' : 'visible'}
      bg-white
      shadow-custom
    `}
  >
    <Pressable
      android_ripple={{ color: '#ccc' }}
      className="active:opacity-50"
      onPress={selectMealItemHandler}
    >
      <View className="rounded-lg overflow-hidden">
        <View>
          <Image source={{ uri: imageUrl }} className="w-full h-[200px]" />
          <Text className="font-bold text-center text-lg m-1">{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </View>
    </Pressable>
  </View>
)

export default MealItem
