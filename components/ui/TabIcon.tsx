// src/components/TabIcon.tsx
import React from 'react';
import { Image, ImageStyle } from 'react-native';

interface TabIconProps {
  source: any;
  color: string;
  size?: number;
}

export const TabIcon = ({ source, color, size = 24 }: TabIconProps) => {
  const style: ImageStyle = {
    width: size,
    height: size,
    tintColor: color,
  };

  return <Image source={source} style={style} />;
};