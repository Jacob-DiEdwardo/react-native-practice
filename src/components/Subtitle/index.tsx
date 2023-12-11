import { View, Text } from 'react-native'
import type { SubtitleProps } from './types'

const Subtitle: React.FC<SubtitleProps> = ({ children }) => (
  <View className="p-[6px] mx-[12px] my-[4px] border-b-[#e2b497] border-b-[2px]">
    <Text className="text-[#e2b497] text-lg font-bold text-center">
      {children}
    </Text>
  </View>
)

export default Subtitle
