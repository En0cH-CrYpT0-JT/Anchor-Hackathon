import React, { useEffect } from 'react';
import { Alert, ImageBackground } from 'react-native'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, YStack, Text, Spinner, Button } from 'tamagui';
import { Plus } from 'lucide-react-native';

import tamaguiConfig from '../tamagui.config';
import Deck from '../components/Deck/Deck';
import { generateLiveTasks } from '../data/liveTasks';
import { useTaskStore } from '../store/useTaskStore';

export default function HomeScreen() {
  const { tasks, setTasks, onSwipe } = useTaskStore();
  
  useEffect(() => {
    generateLiveTasks().then(setTasks);
  }, []);

  const addTask = () => {
    Alert.alert("Aye Captain! 🏴‍☠️", "New task added to the deck: Swab the poop deck.");
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* The Ocean Background */}
        <ImageBackground 
          source={require('../assets/ocean.jpg')} 
          style={{ flex: 1, width: '100%', height: '100%' }}
          resizeMode="cover"
        >
          <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="rgba(0,0,0,0.3)"> 
            {/* Added a slight dark overlay so text pops */}
            
            <YStack position="absolute" top={60} alignItems="center" zIndex={10}>
              <Text fontSize="$9" color="$gold" fontWeight="bold" letterSpacing={4}>ANCHOR</Text>
              <Text fontSize="$4" color="#fff" opacity={0.8}>Captain's Log: {new Date().toLocaleDateString()}</Text>
            </YStack>

            {tasks.length === 0 ? (
               <YStack alignItems="center" gap="$4">
                 <Spinner size="large" color="$gold" />
                 <Text color="$parchment" fontSize="$5">Consulting the Star Charts...</Text>
               </YStack>
            ) : (
               <Deck cards={tasks} onSwipe={onSwipe} />
            )}

            <Button 
              position="absolute" bottom={40} right={30} size="$6" circular 
              backgroundColor="$gold" elevation="$5" onPress={addTask}
            >
              <Plus size={30} color="#3E2723" />
            </Button>

          </YStack>
        </ImageBackground>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
