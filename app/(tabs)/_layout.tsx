// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { TabIcon } from '@/components/ui/TabIcon';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { TabIcons, TabIconSize } from '@/constants/TabIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicial',
          tabBarIcon: ({ color }) => (
            <TabIcon source={TabIcons.home} color={color} size={TabIconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <TabIcon source={TabIcons.menu} color={color} size={TabIconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="documentos"
        options={{
          title: 'Documentos',
          tabBarIcon: ({ color }) => (
            <TabIcon source={TabIcons.documents} color={color} size={TabIconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <TabIcon source={TabIcons.profile} color={color} size={TabIconSize} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => (
            <TabIcon source={TabIcons.settings} color={color} size={TabIconSize} />
          ),
        }}
      />
    </Tabs>
  );
}