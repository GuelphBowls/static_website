// filename: components/Header/TopNav/TopNavContext.tsx
import { createContext } from 'react'

export type TopNavState = {
	activeMenu: string | null;
	toggleMenu: (label: string) => void;
}

export const TopNavContext = createContext<TopNavState | null>(null)