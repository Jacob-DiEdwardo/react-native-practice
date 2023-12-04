import { View, Text, StyleSheet } from 'react-native'
import type { MealDetailsProps } from './types'

const MealDetails: React.FC<MealDetailsProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => (
  <View style={[styles.details, style]}>
    <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
    <Text style={[styles.detailItem, textStyle]}>
      {complexity.toUpperCase()}
    </Text>
    <Text style={[styles.detailItem, textStyle]}>
      {affordability.toUpperCase()}
    </Text>
  </View>
)

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
