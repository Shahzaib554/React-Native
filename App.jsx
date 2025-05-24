import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text, View } from 'react-native';
import OnPress from './src/components/OnPress';
import JSX from './src/components/JSX';
import UseStateHook from './src/components/UseStateHook';
import Pros from './src/components/pros'
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';

const queryClient = new QueryClient();

const App = () => {
  return (
  <View style= {{backgroundColor: 'white', flex: 1}}>
    {/* <OnPress/> */}
    {/* <UseStateHook/> */}
    {/* <Pros/> */}
    {/* <InputText/> */}
    <Styling/>
  </View>
  );
};

export default App;
