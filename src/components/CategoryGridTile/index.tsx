import { Pressable, View, Text, Platform } from 'react-native'
import type { CategoryGridTileProps } from './types'

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({
  title,
  color,
  onPress,
}) => (
  <View
    className={`
      flex-1
      m-4
      h-[150px]
      rounded-lg
      bg-white
      shadow-black/25
      overflow-${Platform.OS === 'android' ? 'hidden' : 'visible'}
    `}
  >
    <Pressable
      android_ripple={{ color: '#ccc' }}
      className="flex-1 active:opacity-50"
      onPress={onPress}
    >
      <View
        style={{ backgroundColor: color }}
        className={`
          flex-1
          p-4
          rounded-lg
          justify-center
          items-center
        `}
      >
        <Text className="font-bold text-lg">{title}</Text>
      </View>
    </Pressable>
  </View>
)

export default CategoryGridTile
