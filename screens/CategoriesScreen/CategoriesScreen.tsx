import { FlatList } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import type { WithCategoriesScreenOutgoingProps } from './types'

const CategoriesScreen: React.FC<WithCategoriesScreenOutgoingProps> = ({
  renderCategoryItem
}) => (
  <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />
)

export default CategoriesScreen
