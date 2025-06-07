// app/(tabs)/menu.tsx
import React from 'react';
import MenuAdmin from '../../components/menus/menuAdmin';
import MenuDiscente from '../../components/menus/menuDiscente';

const userType: 'admin' | 'discente' = 'admin';

export default function Menu() {
  if (userType === 'admin') return <MenuAdmin />;
  return <MenuDiscente />;
}
