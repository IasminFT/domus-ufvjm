// app/(tabs)/menu.tsx
import React from 'react';
import MenuAdmin from '../../components/menus/menuAdmin';
import MenuDiscente from '../../components/menus/menuDiscente';
import MenuPsico from '../../components/menus/menuPsico';

const userType: 'admin' | 'discente' | 'psicologo' = 'admin';

export default function Menu() {
  if (userType === 'admin') return <MenuAdmin />;
  if (userType === 'psicologo') return <MenuPsico />;
  return <MenuDiscente />;
}
