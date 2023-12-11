export interface WithMealItemIncomingProps {
  id: string
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
}

export interface WithMealItemOutgoingProps extends WithMealItemIncomingProps {
  selectMealItemHandler: () => void
}
