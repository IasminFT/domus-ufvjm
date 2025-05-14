// components/ui/StaticImage.tsx
import React from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

interface StaticImageProps extends ImageProps {}

export const StaticImage = ({ style, ...props }: StaticImageProps) => {
  return (
    <View style={styles.container}>
      <Image 
        {...props}
        style={[styles.image, style]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 3, // Ajuste conforme a proporção da sua imagem
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: '90%',
    height: '100%',
  },
});