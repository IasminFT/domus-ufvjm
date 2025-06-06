// src/components/ui/TabIcon.tsx
import React from 'react';
import { Image, ImageStyle } from 'react-native';

type Props = {
  source: any;      // pode ser ImageSourcePropType, mas any funciona para o require
  color: string;
  size: number;
};

export const TabIcon = ({ source, color, size }: Props) => {
  const style: ImageStyle = {
    width: size,
    height: size,
    tintColor: color,
  };

  return (
    <Image
      source={source}
      style={style}
      resizeMode="contain"
    />
  );
};
