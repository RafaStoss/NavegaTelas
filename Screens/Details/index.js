import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Details() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>Página de detalhes</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F08080',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
    justifyContent: 'center', 
  },
  texto: {
    color: 'white',
    fontSize: 18, 
    fontWeight: 'bold', 
  },
})