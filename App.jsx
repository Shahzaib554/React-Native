import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text, View } from 'react-native';
import OnPress from './src/components/OnPress';
import JSX from './src/components/JSX';

const queryClient = new QueryClient();

const App = () => {
  return (
  <View>
    <OnPress/>
  </View>
  );
};

export default App;
