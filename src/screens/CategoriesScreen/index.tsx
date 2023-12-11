import withHOC from '../../utils/withHOC'
import type {
  WithCategoriesScreenIncomingProps,
  RenderCategoryItem,
  WithCategoriesScreenOutgoingProps,
} from './types'
import CategoryGridTile from '../../components/CategoryGridTile'
import CategoriesScreen from './CategoriesScreen'

const withCategoriesScreen = withHOC<
  WithCategoriesScreenIncomingProps,
  WithCategoriesScreenOutgoingProps
>(({ navigation }) => {
  const renderCategoryItem: RenderCategoryItem = (itemData) => {
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
  return {
    renderCategoryItem,
  }
}, 'withCategoriesScreen')

export default withCategoriesScreen(CategoriesScreen)
