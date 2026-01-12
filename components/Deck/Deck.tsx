import React from 'react';
import { ScrollView } from 'react-native';
import { YStack, Text, XStack, Button } from 'tamagui';
import { TaskCard } from '../../types/task.d';

export default function Deck({ cards, onSwipe }: { cards: TaskCard[], onSwipe: any }) {

  // A Pirate Parchment Card Component
  const CardView = ({ item }: { item: TaskCard }) => (
    <YStack 
      backgroundColor="$parchment"
      borderRadius="$2"
      padding="$5" 
      width="100%"
      marginBottom="$5"
      borderWidth={2}
      borderColor="#D7C49E"
      transform={[{ rotate: '-1deg' }]} // Slight tilt for style
    >
      {/* The "Wax Seal" Header */}
      <XStack justifyContent="space-between" alignItems="center" marginBottom="$2">
        <YStack width={40} height={40} borderRadius={20} backgroundColor="$red" alignItems="center" justifyContent="center">
           <Text fontSize="$6">⚓️</Text>
        </YStack>
        <Text color="$color" fontSize="$3" fontWeight="bold" opacity={0.5} letterSpacing={2}>
           WANTED
        </Text>
      </XStack>

      <YStack>
        <Text fontSize="$8" fontFamily="serif" fontWeight="bold" color="$color" marginBottom="$2">
          {item.title}
        </Text>
        <Text fontSize="$5" fontFamily="serif" color="$color" lineHeight="$5" opacity={0.8}>
          {item.summary}
        </Text>
      </YStack>
      
      <YStack borderTopWidth={1} borderColor="#D7C49E" paddingTop="$4" marginTop="$4">
        <XStack justifyContent="space-between" marginBottom="$4">
          <Text color="$color" fontWeight="bold" textTransform="uppercase" fontSize="$3">
             {item.source}
          </Text>
          <Text color="$red" fontWeight="bold" fontFamily="serif">
             {item.urgencyLevel} Priority
          </Text>
        </XStack>
        
        <Text fontSize="$5" fontWeight="bold" color="$color">
          👉 {item.suggestedAction}
        </Text>

        {/* Action Button */}
        <Button 
            marginTop="$4" 
            backgroundColor="$green" 
            color="white"
            onPress={() => onSwipe(item.id, 'accept')}
        >
            Mark as Done
        </Button>
      </YStack>
    </YStack>
  );

  return (
    <YStack flex={1} width="100%" padding="$4">
        <ScrollView showsVerticalScrollIndicator={false}>
            <YStack paddingBottom="$10">
                {cards.map((card) => (
                    <CardView key={card.id} item={card} />
                ))}
            </YStack>
        </ScrollView>
    </YStack>
  );
}
