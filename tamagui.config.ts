import { createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';

const appConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      background: '#001E3C', // Deep Navy (Ocean Floor)
      color: '#3E2723', // Dark Brown (Old Ink)
      parchment: '#F5E6C4', // Old Paper texture color
      gold: '#FFD700', // Pirate Gold
      red: '#8B0000', // Wax Seal Red
      green: '#2E8B57', // Seaweed Green
    },
  },
});

export type AppConfig = typeof appConfig;
declare module 'tamagui' { interface TamaguiCustomConfig extends AppConfig {} }
export default appConfig;
