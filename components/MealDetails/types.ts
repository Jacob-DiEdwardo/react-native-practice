import type { ViewStyle, TextStyle } from 'react-native'

export interface MealDetailsProps {
  duration: number
  complexity: string
  affordability: string
  style?: ViewStyle
  textStyle?: TextStyle
}
