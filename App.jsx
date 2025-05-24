import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text, View } from 'react-native';
import OnPress from './src/components/OnPress';
import JSX from './src/components/JSX';
import UseStateHook from './src/components/UseStateHook';
import Pros from './src/components/pros'
import InputText from './src/components/InputText';

const queryClient = new QueryClient();

const App = () => {
  return (
  <View>
    {/* <OnPress/> */}
    {/* <UseStateHook/> */}
    {/* <Pros/> */}
    <InputText/>
  </View>
  );
};

export default App;
