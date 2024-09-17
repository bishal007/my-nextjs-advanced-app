import { create } from 'zustand'

interface AppState {
  user: any
  setUser: (user: any) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}))