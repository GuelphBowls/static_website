import { createContext, useContext } from 'react';
import type { CardColor } from '@/components/Cards/CardDataTypes';

export const CardColorContext = createContext<CardColor | undefined>(undefined);
export const useCardColor = () => useContext(CardColorContext);