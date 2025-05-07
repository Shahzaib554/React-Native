import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text, View } from 'react-native';
import PostListScreen from '../React-Native/src/screens/postListScreen';
import JSX from './src/components/JSX';

const queryClient = new QueryClient();

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    //     <PostListScreen />
    // </QueryClientProvider>

  <View>
    <JSX/>
  </View>
  );
};

export default App;
