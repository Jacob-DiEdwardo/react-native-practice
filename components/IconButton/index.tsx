import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import type { IconButtonProps } from './types'

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color,
  onPress
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => pressed && styles.pressed}
  >
    <Ionicons name={icon} size={24} color={color} />
  </Pressable>
)

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})