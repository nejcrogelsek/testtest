export interface Category {
  id: number
  name: string
  sports: Sport[]
}

export interface Sport {
  id: number
  name: string
  category: number
}
