import React from 'react';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  runOnJS 
} from 'react-native-reanimated';
import { YStack, Text, XStack } from 'tamagui';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const SwipeableCard = ({ item, onSwipe, index }: any) => {
  const translateX = useSharedValue(0);
  const rotation = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      rotation.value = event.translationX / 15; 
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > 100) {
        translateX.value = withSpring(event.translationX > 0 ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5, { damping: 15 });
        runOnJS(onSwipe)(item.id, event.translationX > 0 ? 'accept' : 'reject');
      } else {
        translateX.value = withSpring(0);
        rotation.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotateZ: `${rotation.value}deg` },
    ],
    zIndex: 1000 - index, 
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View 
        style={[
          { 
            position: 'absolute', 
            width: '90%', 
            height: '65%',
            transform: [{ rotate: `${(index % 2 === 0 ? 1 : -1) * index * 1.5}deg` }]
          }, 
          animatedStyle
        ]}
      >
        <YStack 
            backgroundColor="#F5E6C4" // 👈 HARDCODED OPAQUE PARCHMENT COLOR
            flex={1}
            borderRadius="$3"
            padding="$6"
            borderWidth={3}
            borderColor="#8B4513" // SaddleBrown Edge
            shadowColor="#000"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.5} // Darker shadow
            shadowRadius={5}
            elevation={10} 
            opacity={1} // 👈 FORCE SOLIDITY
            justifyContent="space-between"
        >
           {/* Header */}
           <XStack justifyContent="space-between" alignItems="center">
             <YStack backgroundColor="#8B0000" width={45} height={45} borderRadius={25} alignItems="center" justifyContent="center" borderWidth={2} borderColor="#500000">
                <Text fontSize="$6">☠️</Text>
             </YStack>
             <Text color="#3E2723" fontFamily="serif" fontWeight="bold" letterSpacing={2} opacity={0.6}>
               CAPTAIN'S ORDERS
             </Text>
           </XStack>

           {/* Main Content */}
           <YStack>
             <Text fontSize="$9" fontFamily="serif" fontWeight="900" color="#3E2723" marginBottom="$3">
               {item.title}
             </Text>
             <Text fontSize="$6" fontFamily="serif" color="#3E2723" lineHeight="$6" fontWeight="500">
                "{item.summary}"
             </Text>
           </YStack>

           {/* Footer */}
           <YStack borderTopWidth={2} borderColor="#8B4513" paddingTop="$4" borderStyle="dashed">
             <Text fontSize="$3" color="#8B0000" fontWeight="bold" textTransform="uppercase" marginBottom="$1">
               Immediate Action Required:
             </Text>
             <Text fontSize="$6" fontWeight="bold" color="#3E2723" fontFamily="serif">
               👉 {item.suggestedAction}
             </Text>
           </YStack>
        </YStack>
      </Animated.View>
    </GestureDetector>
  );
};
