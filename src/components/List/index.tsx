import { View, Text } from 'react-native'
import type { ListProps } from './types'

const List: React.FC<ListProps> = ({ data }) =>
  data.map((dataPoint) => (
    <View
      key={dataPoint}
      className="rounded-md px-2 py-1 my-1 mx-3 bg-[#e2b497]"
    >
      <Text className="text-[#351401] text-center">{dataPoint}</Text>
    </View>
  ))

export default List
