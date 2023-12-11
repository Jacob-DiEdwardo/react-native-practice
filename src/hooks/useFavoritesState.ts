import { hookstate, useHookstate } from '@hookstate/core'

const favoritesState = hookstate<string[]>(['test'])

const useFavoritesState = () => {
  const state = useHookstate(favoritesState)

  const addFavorite = (id: string) => {
    state.set([...state.value, id])
  }

  const removeFavorite = (id: string) => {
    state.set(state.value.filter((mealId) => mealId !== id))
  }

  return {
    favoritesState: state.value,
    addFavorite,
    removeFavorite,
  }
}

export default useFavoritesState
