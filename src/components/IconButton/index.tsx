import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import type { IconButtonProps } from './types'

const IconButton: React.FC<IconButtonProps> = ({ icon, color, onPress }) => (
  <Pressable onPress={onPress} className="active:opacity-70">
    <Ionicons name={icon} size={24} color={color} />
  </Pressable>
)

export default IconButton
