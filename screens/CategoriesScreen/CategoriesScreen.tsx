import { FlatList } from 'react-native'
import type { ListRenderItem } from 'react-native'
import CategoryGridTile from '../../components/CategoryGridTile'
import { CATEGORIES } from '../../data/dummy-data'
import Category from '../../models/category'
import type { CategoriesScreenProps } from './types'

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<Category> = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
