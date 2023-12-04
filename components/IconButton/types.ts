import { Ionicons } from '@expo/vector-icons'

export interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap
  color: string
  onPress: () => void
}
