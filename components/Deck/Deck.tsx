import React from 'react';
import { YStack } from 'tamagui';
import { SwipeableCard } from './SwipeableCard';

export default function Deck({ cards, onSwipe }: any) {
  // Only show top 3 cards to keep it fast
  const visibleCards = cards.slice(0, 3);

  return (
    <YStack flex={1} alignItems="center" justifyContent="center" width="100%">
      {visibleCards.map((card: any, index: number) => (
        <SwipeableCard 
            key={card.id} 
            item={card} 
            index={index} 
            onSwipe={onSwipe} 
        />
      )).reverse()} 
      {/* Reverse so the first item in the array is on top of the visual stack */}
    </YStack>
  );
}
