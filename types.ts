export type RootStackNavigatorParamList = {
  Drawer: undefined
  MealsOverview: { categoryId: string }
  MealDetail: { mealId: string }
}

export type DrawerNavigatorParamList = {
  Categories: undefined
  Favorites: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorParamList {}
  }
}
