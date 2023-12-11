import type { ListRenderItem } from 'react-native'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { DrawerScreenProps } from '@react-navigation/drawer'
import type { RootStackNavigatorParamList, DrawerNavigatorParamList } from '../../types'
import Category from '../../models/category'

export type WithCategoriesScreenIncomingProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorParamList, 'Categories'>,
  NativeStackScreenProps<RootStackNavigatorParamList>
>

export type RenderCategoryItem = ListRenderItem<Category>

export interface WithCategoriesScreenOutgoingProps {
  renderCategoryItem: RenderCategoryItem
}
