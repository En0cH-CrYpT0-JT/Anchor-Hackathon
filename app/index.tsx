import React, { useEffect } from 'react';
import { Alert } from 'react-native'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, YStack, Text, Spinner, Button } from 'tamagui';
import { Plus } from 'lucide-react-native';

// Import your custom config and components
import tamaguiConfig from '../tamagui.config';
import Deck from '../components/Deck/Deck';
import { generateLiveTasks } from '../data/liveTasks';
import { useTaskStore } from '../store/useTaskStore';

// 👇 THIS IS THE CRITICAL LINE FOR THE "MISSING EXPORT" ERROR
export default function HomeScreen() {
  const { tasks, setTasks, onSwipe } = useTaskStore();
  
  useEffect(() => {
    // Load the Gemini tasks on startup
    generateLiveTasks().then(setTasks);
  }, []);

  const addTask = () => {
    // Simple Alert instead of broken Notifications
    Alert.alert(
      "Aye Captain! 🏴‍☠️",
      "New task added to the deck: Swab the poop deck."
    );
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* The style={{ flex: 1 }} here is required for gestures to work 
         Use a solid color (#001E3C) instead of the crashing Gradient 
      */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <YStack 
          flex={1} 
          backgroundColor="#001E3C" 
          justifyContent="center" 
          alignItems="center"
        >
            
            {/* Title Section */}
            <YStack position="absolute" top={60} alignItems="center" zIndex={10}>
              <Text fontSize="$9" color="$gold" fontWeight="bold" letterSpacing={4}>ANCHOR</Text>
              <Text fontSize="$4" color="#fff" opacity={0.7}>Captain's Log: {new Date().toLocaleDateString()}</Text>
            </YStack>

            {/* The Card Deck */}
            {tasks.length === 0 ? (
               <YStack alignItems="center" gap="$4">
                 <Spinner size="large" color="$gold" />
                 <Text color="$parchment" fontSize="$5">Consulting the Star Charts...</Text>
               </YStack>
            ) : (
               <Deck cards={tasks} onSwipe={onSwipe} />
            )}

            {/* The Add Button */}
            <Button 
              position="absolute" 
              bottom={40} 
              right={30} 
              size="$6" 
              circular 
              backgroundColor="$gold" 
              elevation="$5"
              onPress={addTask}
            >
              <Plus size={30} color="#3E2723" />
            </Button>

        </YStack>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
