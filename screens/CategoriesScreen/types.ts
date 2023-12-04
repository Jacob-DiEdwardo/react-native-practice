import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { DrawerScreenProps } from '@react-navigation/drawer'
import type { RootStackNavigatorParamList, DrawerNavigatorParamList } from '../../types'

export type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorParamList, 'Categories'>,
  NativeStackScreenProps<RootStackNavigatorParamList>
>
